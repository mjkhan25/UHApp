import {Http} from '@angular/http';
import { Injectable } from '@angular/core';


import {AppConstants} from '../constants/app.constants';
import 'rxjs/add/operator/map';
//import{Appointment} from '../modal/directoryFindModal';


@Injectable()
export class DirectoryFindService {
  baseUrl:string;

  constructor(private http:Http){
        this.baseUrl = AppConstants.BASE_API_URL;
  }

  getDirectoryFindData()
  {
      var url = this.baseUrl + 'wfMenu/GetMenuItemsIOS/612';
      return this.http.get(url).map(res=>res.json());
  };

}
