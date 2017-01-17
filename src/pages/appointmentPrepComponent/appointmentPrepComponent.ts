import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AppointmentPrepService} from '../../services/appointmentPrepService';

declare var jQuery: any;


@Component({
  selector: 'appointmentPrepComponent',
  templateUrl: 'appointmentPrepComponent.html',
  providers:[AppointmentPrepService]
})
export class appointmentPrepComponent {
  prep: string = "seeAll";
  public clickClass:string;
  appointmentPrepData:any[];
  diagnosisData :any[];
  treatmentData :any[];
  dataProPlaning:any[];
 
  constructor(
    public navCtrl: NavController,
    public appointmentPrepService:AppointmentPrepService
    ) {

  var _that = this;  
  this.appointmentPrepService.getAppointmentPrepData().subscribe((response)=>{   
  this.diagnosisData = response.dataDiagnosis;
  this.treatmentData = response.dataTreatment;
  this.dataProPlaning = response.proPlaning;
  setTimeout(function(){ jQuery( ".lastBoder .item-inner" ).last().addClass( "noLastBoder" ); }, 100);
  setTimeout(function(){ jQuery( ".lastBoder1 .item-inner" ).last().addClass( "noLastBoder" ); }, 100);
});
  
    
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


