import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {departmentComponent} from '../departmentComponent/departmentComponent';
import {DirectoryFindService} from '../../services/directoryFindService';


@Component({
  selector: 'directoryComponent',
  templateUrl: 'directoryComponent.html',
  providers:[DirectoryFindService]
})
export class directoryComponent  {
    
 public clickClass:string;
 directoryFindData:any[];

  constructor(
    public navCtrl: NavController,
    public directoryFindService:DirectoryFindService
    ) {
   
  var _that = this;  
  this.directoryFindService.getDirectoryFindData().subscribe((response)=>{   
    this.directoryFindData = response;
  });
    
  }

  directoryDetails() {
    this.clickClass =""
       this.navCtrl.push(departmentComponent);
    }

}
