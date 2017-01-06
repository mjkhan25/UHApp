import { Component, Input } from '@angular/core';

import { NavController, ModalController, NavParams } from 'ionic-angular';
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
    public params: NavParams
    ) {
    var _that = this;  
		this.departmentService.getDepartmentData(params.get('id')).subscribe((response)=>{   
		this.departmentData = response.DestinationList;
    this.departmentSearchData = response.DestinationList;
		
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
