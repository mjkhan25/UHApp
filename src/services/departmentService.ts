import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

import {AppConstants} from '../constants/app.constants';
import 'rxjs/add/operator/map';
//import{Appointment} from '../modal/departmentModal';


@Injectable()
export class DepartmentService {
  baseUrl:string;

  constructor(private http:Http){
        this.baseUrl = AppConstants.BASE_API_URL;
  }

  getDepartmentData(id)
  {
      var url = this.baseUrl + 'wfDestination/GetDestinationDataIOSv2/' + id;
      return this.http.get(url).map(res=>res.json());
  };

}
