import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {UHNewsService} from '../../services/uhNewsService';
import {uhNewsDescriptionComponent} from '../uhNewsDescriptionComponent/uhNewsDescriptionComponent';
declare var jQuery: any;
declare const X2JS: any;

@Component({
  selector: 'uhNewsComponent',
  templateUrl: 'uhNewsComponent.html',
  providers:[UHNewsService]
 
})
export class uhNewsComponent {
    public clickClass:string;
    getUHNewsDescription(newsDataDesc) {
        this.clickClass =""
        this.navCtrl.push(uhNewsDescriptionComponent,{newsDataDesc: newsDataDesc});
    }
  //getUHNews:any[];
   x2js: any;
   newsData:any[];
   


  constructor(
    public navCtrl: NavController,
     public uhNewsService:UHNewsService,
     private loadingCtrl: LoadingController
    ) {
    // Add text loading popup
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading ...'
    });
    // Show the loading  popup
    loadingPopup.present();
    
    this.x2js = new X2JS();
  
  
var _that = this;  
    this.uhNewsService.getUhNewsData().subscribe((response)=>{   
    var jsonData = this.x2js.xml_str2json(response);
    this.newsData = jsonData.rss.channel.item;
    //console.log(jsonData);
    loadingPopup.dismiss();
 });

   }


  // code for card toggle
  collapse(event) {
    var _current = (event.target) ? event.target : event;
    if(jQuery(_current).hasClass('upcomingDown')) {
      jQuery(_current).removeClass('upcomingDown');
    } else {
      jQuery('.togList .upcomingDown').removeClass('upcomingDown');
      jQuery('.togList .wrapBox').slideUp();
      jQuery(_current).addClass('upcomingDown');
    }
    jQuery(_current).next('.wrapBox').slideToggle();
  }


  


}


