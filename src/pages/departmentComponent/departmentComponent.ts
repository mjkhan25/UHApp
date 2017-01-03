import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import {modalComponent} from '../modalComponent/modalComponent';
declare var jQuery: any;

@Component({
  selector: 'departmentComponent',
  templateUrl: 'departmentComponent.html'
})
export class departmentComponent {

  constructor(public navCtrl: NavController,  private modalCtrl:ModalController) {
    
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
