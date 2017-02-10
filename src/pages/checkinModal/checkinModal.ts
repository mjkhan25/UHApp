import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UserInformation } from '../../constants/user.information';
import { DatePipe } from '@angular/common';
declare var jQuery: any;

@Component({
  selector: 'checkinModal',
  templateUrl: 'checkinModal.html'
})
export class checkinModal {

  private patientId: string;
  private todayTitle: string;
  private appointments: any[];
  private doctors: any[];
  private filterAppointments: any[];
  private filterTodayAppointments: any[];
  private setDob: string;

  constructor(public navCtrl: NavController,  public af: AngularFire,) {

  // start firebase Appointment code
    this.patientId = UserInformation.patientID;
    this.todayTitle = 'Today';
    var appointmentObservable = this.af.database.list('/appointments', {
      query: {
        orderByChild: 'patientId',
        equalTo: this.patientId,
      }

    });

    appointmentObservable.subscribe(value => {
      this.appointments = value;
      this.getAllDoctor();
     })
    
  }


    getAllDoctor() {
    
    var queryObservable = this.af.database.list('/doctors');
    queryObservable.subscribe(queriedItems => {
      this.doctors = [];
      this.filterAppointments = [];
      this.filterTodayAppointments = [];
      this.doctors = queriedItems;
    
      // this.appointments.forEach(appointmentsElement => {
      //   this.doctors.forEach(doctorsElement => {
      //     if (appointmentsElement.doctorId == doctorsElement.$key) {
      //       doctorsElement.appointment = appointmentsElement;
      //       this.filterDoctors.push(doctorsElement);

      //     }

      //   });
      // });

      this.doctors.forEach(doctorElement => {
        this.appointments.forEach(appointmentElement => {
          if (appointmentElement.doctorId == doctorElement.$key) {
            appointmentElement.doctor = doctorElement;
            this.filterAppointments.push(appointmentElement);

          }
        });
      });

      this.filterTodayAppointments=[];
     
      this.filterAppointments.forEach(appointment => {
       
        var dateEnUS = new DatePipe('en-US');
        this.setDob = dateEnUS.transform(appointment.appttime, 'dd/MM/yyyy');
        let today = dateEnUS.transform(new Date(), 'dd/MM/yyyy');

        //console.log('setDob : ' + this.setDob + ' ' + today);

        if (this.setDob === today) {
         // console.log('OK : setDob : ' + this.setDob + ' ' + JSON.stringify(appointment));

         appointment.appttime=new Date(appointment.appttime);
         appointment.imageUrl = "https://firebasestorage.googleapis.com/v0/b/uhmobileadmin.appspot.com/o/Doctors%2F"+ appointment.doctor.name.replace(',','').replace(/ /g, '')+".png?alt=media&token=48340fb6-af58-4e24-9fee-a21b6e25a3bc";
          this.filterTodayAppointments.push(appointment);
        }
        else if (this.setDob > today) {
          //console.log('NOK : setDob : ' + this.setDob + ' ' + appointment.name);
          
        }
      });
      //console.log("array:" + this.filterTodayAppointments.length);
      if (this.filterTodayAppointments.length < 0)
        this.todayTitle = "No today";
      });

  }
  

  // code start for check In Modal
  ngAfterViewInit(){
  
    jQuery(function(){
      var seconds = jQuery('.progress-pie-chart').data('percent');
      var startPerson = jQuery('.progress-pie-chart').data('start-person');
  
  //drawCircle();
  
  function countdown() {
    function tick() {
      drawCircle();
    }
    tick();
  }
  
  function calculatePercent() {
    return parseInt(jQuery('.progress-pie-chart').data('percent'));
  }
  
  function drawCircle() {
  //360*(seconds/startTime)
    var  percent = calculatePercent();
    var deg = (360/12)*(percent-parseInt(startPerson));
    var people = percent-parseInt(startPerson); 
    
    if (people > 5) {
      jQuery('.progress-pie-chart').addClass('gt-50');
    } else {
      jQuery('.progress-pie-chart').removeClass('gt-50');
    }
 
    jQuery('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    jQuery('.ppc-percents span').html(people+'<br><span class="personName"> People</span>');
  }

  // start the countdown
  countdown();
});
  }
 // code end for check In Modal  
  

  


}


