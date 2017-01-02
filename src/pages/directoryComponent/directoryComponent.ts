import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {departmentComponent} from '../departmentComponent/departmentComponent';
//import {tabComponent} from '../tabComponent/tabComponent';


@Component({
  selector: 'directoryComponent',
  templateUrl: 'directoryComponent.html'
})
export class directoryComponent  {
    
 public clickClass:string;
 //private tab2Root:any;
  constructor(public navCtrl: NavController) {
    //this.tab2Root = tabComponent;
    
  }

  directoryDetails() {
   
    this.clickClass =""
       this.navCtrl.push(departmentComponent);
    }

}
