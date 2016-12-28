import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ZippyComponent} from '../my-zippy.component/my-zippy.component';


@Component({
  selector: 'aboutComponent',
  templateUrl: 'aboutComponent.html',
  //directives: 'ZippyComponent'
})
export class aboutComponent {

  constructor(public navCtrl: NavController) {
    
  }



}


