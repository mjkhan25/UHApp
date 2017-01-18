import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {uhNewsComponent} from '../uhNewsComponent/uhNewsComponent';


@Component({
  selector: 'exploreComponent',
  templateUrl: 'exploreComponent.html'
})
export class exploreComponent {
     public clickClass:string;
    getUHnewsData() {
    this.clickClass =""
       this.navCtrl.push(uhNewsComponent);
    }

  constructor(public navCtrl: NavController) {
    
  }



}


