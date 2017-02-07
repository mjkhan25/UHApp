import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { modalComponent } from '../modalComponent/modalComponent';
import { Appointment } from '../../modal/appointmentModal';
import { AppointmentService } from '../../services/appointmentService';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UserInformation } from '../../constants/user.information';
import { Observable } from 'rxjs/Observable';
import { DatePipe } from '@angular/common';

declare var jQuery: any;


@Component({
  selector: 'appointmentsComponent',
  templateUrl: 'appointmentsComponent.html',
  providers: [AppointmentService]  
})
export class appointmentsComponent {

  public clickClass: string;
  upcomingAppointments: any[];

  queriedItems: any[];
  appointments: any[];
  doctors: any[];
  filterAppointments: any[];
  patientId: string;
  filterTodayAppointments: any[];
  filterUpcomingAppointments: any[];
  todayTitle: string;
  setDob: string;
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    public appointmentService: AppointmentService,
    public alertCtrl: AlertController, public af: AngularFire,
    private navParams: NavParams,
    private loadingCtrl: LoadingController
  ) {
    // Add text loading popup
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading ...'
    });
    // Show the loading  popup
    loadingPopup.present();

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
      loadingPopup.dismiss();
    })


  }


  getAllDoctor() {
    
    var queryObservable = this.af.database.list('/doctors');
    queryObservable.subscribe(queriedItems => {
      this.doctors = [];
      this.filterAppointments = [];
      this.filterTodayAppointments = [];
      this.filterUpcomingAppointments = [];
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
      this.filterUpcomingAppointments=[];
      this.filterAppointments.forEach(appointment => {
       
        var dateEnUS = new DatePipe('en-US');
        this.setDob = dateEnUS.transform(appointment.appttime, 'dd/MM/yyyy');
        let today = dateEnUS.transform(new Date(), 'dd/MM/yyyy');

        //console.log('setDob : ' + this.setDob + ' ' + today);

        if (this.setDob === today) {
          console.log('OK : setDob : ' + this.setDob + ' ' + appointment.name);
         appointment.appttime=new Date(appointment.appttime);
          this.filterTodayAppointments.push(appointment);
        }
        else if (this.setDob > today) {
          //console.log('NOK : setDob : ' + this.setDob + ' ' + appointment.name);
          appointment.appttime=new Date(appointment.appttime);
          this.filterUpcomingAppointments.push(appointment);
        }
      });
      //console.log("array:" + this.filterTodayAppointments.length);
      if (this.filterTodayAppointments.length < 0)
        this.todayTitle = "No today";
      });

  }


  // start Card Toggle Appointment code
  collapse(event) {
    var _current = (event.target) ? event.target : event;
    if (jQuery(_current).hasClass('upcomingDown')) {
      jQuery(_current).removeClass('upcomingDown');
    } else {
      jQuery('.appointment .upcomingDown').removeClass("upcomingDown");
      jQuery(".appointment .wrapBox").slideUp();
      jQuery(_current).addClass('upcomingDown');
    }
    jQuery(_current).next('.wrapBox').slideToggle();
  }

  //modal call method
  openModal() {
    let profileModal = this.modalCtrl.create(modalComponent);
    profileModal.present();
  }


  ngAfterViewInit() {
  }





}
