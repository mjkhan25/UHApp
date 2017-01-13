import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';



@Component({
  selector: 'appointmentPrepComponent',
  templateUrl: 'appointmentPrepComponent.html'
})
export class appointmentPrepComponent {
  prep: string = "seeAll";
 
  constructor(public navCtrl: NavController) {
    
  }



}


