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
    allAppointments:any[];
    todayAppointments:any[];
    upcomingAppointments:any[];
  constructor(
    public navCtrl: NavController,
    private modalCtrl:ModalController,
    public appointmentService:AppointmentService

    ) {
  var _that = this;  
  this.appointmentService.getAppointmentData().subscribe((response)=>{   
    this.todayAppointments = response;
    this.upcomingAppointments = response;
   })
  }
  
  collapse(event) {
    var _current = (event.target) ? event.target : event;
    if(jQuery(_current).hasClass('upcomingDown')) {
      jQuery(_current).removeClass('upcomingDown');
    } else {
      jQuery('.appointment .upcomingDown').removeClass("upcomingDown");
      jQuery(".appointment .wrapBox").slideUp();
      jQuery(_current).addClass('upcomingDown');
    }
    jQuery(_current).next('.wrapBox').slideToggle();
  }

  //modal call method
  openModal(){
    let profileModal = this.modalCtrl.create(modalComponent);
    profileModal.present();
  }
  

  ngAfterViewInit() {
  }





}
