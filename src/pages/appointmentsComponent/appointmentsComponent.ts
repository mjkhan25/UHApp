import { Component } from '@angular/core';
import { NavController, ModalController, AlertController, NavParams } from 'ionic-angular';
import { modalComponent } from '../modalComponent/modalComponent';
import { Appointment } from '../../modal/appointmentModal';
import { AppointmentService } from '../../services/appointmentService';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UserInformation } from '../../constants/user.information';
import { Observable } from 'rxjs/Observable';
import {DatePipe} from '@angular/common';

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
  filterDoctors: any[];
  patientId: string;
  filterTodayAppointments:any[];
  filterAppointments:any[];
  todayTitle: string;
  setDob:string;
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    public appointmentService: AppointmentService,
    public alertCtrl: AlertController, public af: AngularFire,
    private navParams: NavParams
  ) {

    // start firebase Appointment code
    this.patientId = UserInformation.patientID;
    this.todayTitle='Today';
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
    this.filterDoctors = [];
    this.filterTodayAppointments = [];
    this.filterAppointments=[];
    var queryObservable = this.af.database.list('/doctors');
    queryObservable.subscribe(queriedItems => {
      this.doctors = queriedItems;

      this.appointments.forEach(appointmentsElement => {
        this.doctors.forEach(doctorsElement => {
          if (appointmentsElement.doctorId == doctorsElement.$key) {
            doctorsElement.appointment = appointmentsElement;
            this.filterDoctors.push(doctorsElement);
          }

        });
      });

this.filterDoctors.forEach(doctorsElement => {
var datePipeApp = new DatePipe('en-US');
var datePipe = new DatePipe('en-US');
console.log("----------------------------------");
console.log(JSON.stringify(doctorsElement));
console.log("----------------------------------");
console.log(JSON.stringify(doctorsElement.appointment));
console.log("----------------------------------");
console.log(JSON.stringify(doctorsElement.appointment.appttime));
console.log("----------------------------------");

this.setDob = datePipeApp.transform(doctorsElement.appointment.appttime, 'dd/MM/yyyy');
console.log(this.setDob);
console.log("----------------------------------");
  if (this.setDob === datePipe.transform(new Date(),'dd/MM/yyyy')) {
  console.log("yes");
  this.filterTodayAppointments.push(doctorsElement);
  }
else if(this.setDob > datePipe.transform(new Date(),'dd/MM/yyyy'))
{
this.filterAppointments.push(doctorsElement);
}
});
if(this.filterTodayAppointments.length<0)
this.todayTitle="No today";
console.log("array:"+JSON.stringify(this.filterTodayAppointments));
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
