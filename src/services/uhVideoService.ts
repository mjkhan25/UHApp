import {Http} from '@angular/http';
import { Injectable } from '@angular/core';


import {AppConstants} from '../constants/app.constants';
import 'rxjs/add/operator/map';



@Injectable()
export class UHVideoService {
  baseUrl:string;

  constructor(private http:Http){
        this.baseUrl = AppConstants.BASE_UH_NEWS_URL;
  }

  getUHVideoData()
  {
       var url = 'https://www.youtube.com/feeds/videos.xml?channel_id=UC3o204QqPUa6V3q2m_9DZuQ';
      //var url = 'http://news.uhhospitals.org/news-releases/rss.xml';
      //var url = 'assets/MockData/appointmentPrepData.json';
      //return this.http.get(url).map(res=>res.json());
     var response = this.http.get(url).map(data => data.text());
     return response;
      
  };

}