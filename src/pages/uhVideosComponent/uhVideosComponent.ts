import { Component, Pipe, PipeTransform } from '@angular/core';

import { NavController } from 'ionic-angular';
import {DomSanitizer} from "@angular/platform-browser";

import {UHVideoService} from '../../services/uhVideoService';
declare const X2JS: any;

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'uhVideosComponent',
  templateUrl: 'uhVideosComponent.html',
   providers:[UHVideoService]
 
})


export class uhVideosComponent {
  x2js: any;
  objxml2js: any;
   videoData:any[];
  

  constructor(
    public navCtrl: NavController,
    public uhVideoService:UHVideoService,
    ) {
      this.x2js = new X2JS();
  
  
var _that = this;  
    this.uhVideoService.getUHVideoData().subscribe((response)=>{   
    var jsonData = this.x2js.xml_str2json(response);
    this.videoData = jsonData.feed.entry;
    
   
 });
  }
}


