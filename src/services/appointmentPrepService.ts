import {Http} from '@angular/http';
import { Injectable } from '@angular/core';


import {AppConstants} from '../constants/app.constants';
import 'rxjs/add/operator/map';



@Injectable()
export class AppointmentPrepService {
  baseUrl:string;

  constructor(private http:Http){
        this.baseUrl = AppConstants.BASE_API_URL;
  }

  getAppointmentPrepData()
  {
      //var url = this.baseUrl + 'wfMenu/GetMenuItemsIOS/612';
      var url = 'assets/MockData/appointmentPrepData.json';
      return this.http.get(url).map(res=>res.json());
      
  };

}
