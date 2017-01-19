import {Http} from '@angular/http';
import { Injectable } from '@angular/core';


import {AppConstants} from '../constants/app.constants';
import 'rxjs/add/operator/map';



@Injectable()
export class UHNewsService {
  baseUrl:string;

  constructor(private http:Http){
        this.baseUrl = AppConstants.BASE_UH_NEWS_URL;
  }

  getUhNewsData()
  {
      var url = this.baseUrl + 'news-releases/rss.xml';
      //var url = 'assets/MockData/appointmentPrepData.json';
      //return this.http.get(url).map(res=>res.json());
     var response = this.http.get(url).map(data => data.text());
     return response;
      
  };

}