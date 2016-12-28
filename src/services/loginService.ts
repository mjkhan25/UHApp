import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

import { login } from './login';
import {AppConstants} from '../constants/app.constants';
import 'rxjs/add/operator/map';
import{Login} from '../modal/loginModal';


@Injectable()
export class LoginService {
  baseUrl:string;
  constructor(private http:Http){
        this.baseUrl = AppConstants.BASE_API_URL;
  }

  ValidateLogin(loginDetails:Login)
  {
      //debugger;
      //var url = this.baseUrl + '';
      var url = '../assets/MockData/loginData.json';
      return this.http.get(url).map(res=>res.json());
  }
}
