import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';
import {departmentComponent} from '../departmentComponent/departmentComponent';
import {DirectoryFindService} from '../../services/directoryFindService';


@Component({
  selector: 'directoryComponent',
  templateUrl: 'directoryComponent.html',
  providers:[DirectoryFindService]
})
export class directoryComponent  {
 @Input() directorySearch = '';
 public clickClass:string;
 private directoryData:any[];
 directorySearchData:any[]
  constructor(
    public navCtrl: NavController,
    public directoryFindService:DirectoryFindService
    ) {
   
	var _that = this;  
		this.directoryFindService.getDirectoryFindData().subscribe((response)=>{   
		this.directoryData = response.MenuList;
		this.directorySearchData = response.MenuList;
	});

	}	

	onSearch() {
		this.directorySearchData = [];
		let input = this.directorySearch.toLowerCase();
		for(let i in this.directoryData) {
			if(this.directoryData[i].menuLabel.toLowerCase().indexOf(input) !== -1) {
				this.directorySearchData.push(this.directoryData[i]);
			}
		}
	}

	directoryDetails() {
	   this.clickClass =""
	   this.navCtrl.push(departmentComponent);
	}

}
