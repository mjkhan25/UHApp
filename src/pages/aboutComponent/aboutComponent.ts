import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ZippyComponent} from '../my-zippy.component/my-zippy.component';
//import {tabComponent} from '../tabComponent/tabComponent';


@Component({
  selector: 'aboutComponent',
  templateUrl: 'aboutComponent.html',
  //directives: 'ZippyComponent'
})
export class aboutComponent {

  constructor(public navCtrl: NavController) {
   // this.navCtrl.push(tabComponent,{
   //    	eventObj: 'aboutComponent'
   //      });
  }
}


