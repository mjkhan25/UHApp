import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import {modalComponent} from '../modalComponent/modalComponent';
import {Appointment} from '../../modal/appointmentModal';
import {AppointmentService} from '../../services/appointmentService';

declare var jQuery: any;


@Component({
  selector: 'appointmentsComponent',
  templateUrl: 'appointmentsComponent.html',
  providers:[AppointmentService]
})
export class appointmentsComponent {

  public clickClass:string;
    appointment:any;
  constructor(
    public navCtrl: NavController,
    private modalCtrl:ModalController,
    public appointmentService:AppointmentService

    ) {
    
   this.appointmentService.getAppointmentData().subscribe((res)=>{
   this.appointment=res;
    console.log(res);

   }) 

  }
  
  collapse(event) {
    console.log(event.target);
  }

  //modal call method
 clicktoOpenModal(){
  let profileModal = this.modalCtrl.create(modalComponent);
   profileModal.present();
    }
  

  ngAfterViewInit()
  {

//Upcoming Card

jQuery('.appointment .upcomingClick').on('click', function () {
   jQuery('.appointment .upcomingClick').not(this).removeClass("upcomingDown");
         
  if (jQuery(this).closest('ion-card').find('.upcomingClick').hasClass("upcomingDown")) {
     jQuery(".appointment .upcomingClick").removeClass("upcomingDown");
  } else {
    jQuery(this).closest('ion-card').find('.upcomingClick').addClass("upcomingDown");
     
  }
  
        var $ans = jQuery(this).next(".appointment .wrapBox");
        $ans.slideToggle();
        jQuery(".appointment .wrapBox").not($ans).slideUp();

        
    });

  jQuery(".appointment .upcomingClick:first").trigger('click');
  }





}
