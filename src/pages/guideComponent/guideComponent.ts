import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {appointmentPrepComponent} from '../appointmentPrepComponent/appointmentPrepComponent';


@Component({
  selector: 'guideComponent',
  templateUrl: 'guideComponent.html'
})
export class guideComponent {
   public clickClass:string;
    getAppointmentPrep() {
    this.clickClass =""
       this.navCtrl.push(appointmentPrepComponent);
    }

  constructor(public navCtrl: NavController) {
    
  }



}


