import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
//import {tabComponent} from '../tabComponent/tabComponent';


@Component({
  selector: 'aboutComponent',
  templateUrl: 'aboutComponent.html',
 
})
export class aboutComponent {

  constructor(public navCtrl: NavController) {
   // this.navCtrl.push(tabComponent,{
   //    	eventObj: 'aboutComponent'
   //      });
  }
}


