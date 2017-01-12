import { Component, Input } from '@angular/core';

import { NavController, ModalController, NavParams, LoadingController } from 'ionic-angular';
import {modalComponent} from '../modalComponent/modalComponent';
import {DepartmentService} from '../../services/departmentService';
declare var jQuery: any;

@Component({
  selector: 'departmentComponent',
  templateUrl: 'departmentComponent.html',
  providers:[DepartmentService]
})
export class departmentComponent {
  @Input() departmentSearch = '';
    private departmentData:any[];
    departmentSearchData:any[];
  constructor(
    public navCtrl: NavController,  
    private modalCtrl:ModalController,
    public departmentService:DepartmentService,
    public params: NavParams,
    private loadingCtrl: LoadingController
    ) {
    
    // Add text loading popup
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading ...'
    });
    // Show the loading  popup
    loadingPopup.present();

    var _that = this;  
		this.departmentService.getDepartmentData().subscribe((response)=>{   
		let id = params.get('id');
    let departments = [];
    for(let i in response.DestinationList) {
      if(response.DestinationList[i].destinationtypeid === id) {
        departments.push(response.DestinationList[i]);
      }
    }
    console.log(response);
    this.departmentData = departments;
    this.departmentSearchData = departments;
    loadingPopup.dismiss();
		
	});
    
  }

	onSearch() {
		this.departmentSearchData = [];
		let input = this.departmentSearch.toLowerCase();
		for(let i in this.departmentData) {
			if(this.departmentData[i].destinationname.toLowerCase().indexOf(input) !== -1) {
				this.departmentSearchData.push(this.departmentData[i]);
			}
		}
	}


   clicktoOpenModal(){
    let profileModal = this.modalCtrl.create(modalComponent);
      profileModal.present();
    }

 ngAfterViewInit()
  {
  }

  // code for card toggle
  collapse(event) {
    var _current = (event.target) ? event.target : event;
    if(jQuery(_current).hasClass('upcomingDown')) {
      jQuery(_current).removeClass('upcomingDown');
    } else {
      jQuery('.department .upcomingDown').removeClass('upcomingDown');
      jQuery('.department .wrapBox').slideUp();
      jQuery(_current).addClass('upcomingDown');
    }
    jQuery(_current).next('.wrapBox').slideToggle();
  }


}
