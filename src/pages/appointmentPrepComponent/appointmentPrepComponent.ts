import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
declare var jQuery: any;


@Component({
  selector: 'appointmentPrepComponent',
  templateUrl: 'appointmentPrepComponent.html'
})
export class appointmentPrepComponent {
  prep: string = "seeAll";
 
  constructor(public navCtrl: NavController) {
    
  }



  // code for card toggle 
  collapse(event) {
    var _current = (event.target) ? event.target : event;
    if(jQuery(_current).hasClass('cardClickDown')) {
      jQuery(_current).removeClass('cardClickDown');
    } else {
      jQuery('.prepAddQuestion .cardClickDown').removeClass('cardClickDown');
      jQuery('.prepAddQuestion .wrapBox').slideUp();
      jQuery(_current).addClass('cardClickDown');
    }
    jQuery(_current).next('.wrapBox').slideToggle();
  }

}


