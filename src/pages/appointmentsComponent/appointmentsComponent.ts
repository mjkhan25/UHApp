import { Component } from '@angular/core';

import { NavController, ModalController, AlertController, NavParams } from 'ionic-angular';
import { modalComponent } from '../modalComponent/modalComponent';
import { Appointment } from '../../modal/appointmentModal';
import { AppointmentService } from '../../services/appointmentService';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UserInformation } from '../../constants/user.information';
import { Observable } from 'rxjs/Observable';

declare var jQuery: any;


@Component({
  selector: 'appointmentsComponent',
  templateUrl: 'appointmentsComponent.html',
  providers: [AppointmentService]
})
export class appointmentsComponent {

  public clickClass: string;
  //todayAppointments:any[];
  upcomingAppointments: any[];

  queriedItems: any[];
  appointments: any[];
  doctors: any[];
  filterDoctors: any[];
  patientId: string;

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    public appointmentService: AppointmentService,
    public alertCtrl: AlertController, public af: AngularFire,
    private navParams: NavParams

  ) {


    // var _that = this;  
    // this.appointmentService.getTodayAppointmentData().subscribe((response)=>{   
    //   this.todayAppointments = response;
    // });

    // this.appointmentService.getUpcomingAppointmentData().subscribe((response)=>{   
    //   this.upcomingAppointments = response;
    // });

    //KbGrQTC4aJaQATJxhmU
    // start firebase Appointment code
    this.patientId = UserInformation.patientID;

    var appointmentObservable = this.af.database.list('/appointments', {
      query: {
        orderByChild: 'patientId',
        equalTo: this.patientId,
      }
    });

    appointmentObservable.subscribe(value => {

      this.appointments = value;
      //console.log(this.appointments);
      this.getAllDoctor();
    })


  }


  getAllDoctor() {
    this.filterDoctors = [];
    var queryObservable = this.af.database.list('/doctors');
    queryObservable.subscribe(queriedItems => {
      //console.log('all docs' + queriedItems);
      this.doctors = queriedItems;

      this.appointments.forEach(appointmentsElement => {
        this.doctors.forEach(doctorsElement => {
  
          if (appointmentsElement.doctorId == doctorsElement.$key) {
            doctorsElement.appointment = appointmentsElement;
            this.filterDoctors.push(doctorsElement);
          }

        });
      });

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
