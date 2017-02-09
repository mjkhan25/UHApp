import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { checkinModal } from '../checkinModal/checkinModal';


@Component({
  selector: 'aboutComponent',
  templateUrl: 'aboutComponent.html',
 
})
export class aboutComponent {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController,) {
   // this.navCtrl.push(tabComponent,{
   //    	eventObj: 'aboutComponent'
   //      });
  }

   //Check in modal call method
  openModal() {
    let profileModal = this.modalCtrl.create(checkinModal);
    profileModal.present();
  }
}


