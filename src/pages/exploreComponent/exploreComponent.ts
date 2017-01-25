import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {uhNewsComponent} from '../uhNewsComponent/uhNewsComponent';
import {uhVideosComponent} from '../uhVideosComponent/uhVideosComponent';


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

  getUHVideos() { this.navCtrl.push(uhVideosComponent); }

  constructor(public navCtrl: NavController) {
    
  }



}


