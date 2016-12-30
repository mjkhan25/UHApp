import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {tabComponent} from '../tabComponent/tabComponent';

@Component({
  selector: 'helpComponent',
  templateUrl: 'helpComponent.html'
})
export class helpComponent {

  constructor(public navCtrl: NavController) {
    this.navCtrl.push(tabComponent,{
    	eventObj: 'directory'
    });
  }



}


