import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { homeComponent } from '../pages/homeComponent/homeComponent';
//import { Page2 } from '../pages/page2/page2';
import { appointmentsComponent } from '../pages/appointmentsComponent/appointmentsComponent';
import { directoryComponent } from '../pages/directoryComponent/directoryComponent';
import { departmentComponent } from '../pages/departmentComponent/departmentComponent';
import { modalComponent } from '../pages/modalComponent/modalComponent';
import { tabComponent } from '../pages/tabComponent/tabComponent';
import { exploreComponent } from '../pages/exploreComponent/exploreComponent';
import { guideComponent } from '../pages/guideComponent/guideComponent';
import { helpComponent } from '../pages/helpComponent/helpComponent';
import { aboutComponent } from '../pages/aboutComponent/aboutComponent';
import { feedbackComponent } from '../pages/feedbackComponent/feedbackComponent';
import {LoginService} from '../services/loginService';
import {AppointmentService} from '../services/appointmentService';
import { appointmentPrepComponent } from '../pages/appointmentPrepComponent/appointmentPrepComponent';
import { uhNewsComponent } from '../pages/uhNewsComponent/uhNewsComponent';
import { uhNewsDescriptionComponent } from '../pages/uhNewsDescriptionComponent/uhNewsDescriptionComponent';
import { uhVideosComponent } from '../pages/uhVideosComponent/uhVideosComponent';
import { SafePipe } from '../pages/uhVideosComponent/uhVideosComponent';
import { checkinModal } from '../pages/checkinModal/checkinModal';
//import { firebase } from 'firebase-angular2/core';
import { AngularFireModule } from 'angularfire2';
import { OrderByPipe } from '../pipes/orderby.pipe';




// YOUR SETTINGS GOES HERE!
export const firebaseConfig = {
  apiKey: "AIzaSyBEILoDOPglEO7UCgqAF4BKRi2iQD43aT4",
  authDomain: "uhmobileadmin.firebaseapp.com",
  databaseURL: "https://uhmobileadmin.firebaseio.com",
  storageBucket: "uhmobileadmin.appspot.com",
  messagingSenderId: "294182293302"
};


@NgModule({
  declarations: [
    MyApp,
    homeComponent,
    //Page2,
    appointmentsComponent,
    directoryComponent,
    departmentComponent,
    modalComponent,
    tabComponent,
    exploreComponent,
    guideComponent,
    helpComponent,
    aboutComponent,
    feedbackComponent,
    appointmentPrepComponent,
    uhNewsComponent,
    uhNewsDescriptionComponent,
    uhVideosComponent,
    SafePipe,
    checkinModal,
    OrderByPipe
 
  ],
  
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    homeComponent,
    //Page2,
    appointmentsComponent,
    directoryComponent,
    departmentComponent,
    modalComponent,
    tabComponent,
    exploreComponent,
    guideComponent,
    helpComponent,
    aboutComponent,
    feedbackComponent,
    appointmentPrepComponent,
    uhNewsComponent,
    uhNewsDescriptionComponent,
    uhVideosComponent,
    checkinModal

  ],
  providers: [{provide: [ErrorHandler, LoginService,AppointmentService], useClass: IonicErrorHandler}]
})
export class AppModule {}
