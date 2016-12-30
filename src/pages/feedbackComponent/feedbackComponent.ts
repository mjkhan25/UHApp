import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {tabComponent} from '../tabComponent/tabComponent';

@Component({
  selector: 'feedbackComponent',
  templateUrl: 'feedbackComponent.html'
})
export class feedbackComponent {

  constructor(public navCtrl: NavController) {
    this.navCtrl.push(tabComponent,{
    	eventObj: 'directory'
    });
  }



}


