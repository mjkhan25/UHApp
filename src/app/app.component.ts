import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { homeComponent } from '../pages/homeComponent/homeComponent';
import { Page2 } from '../pages/page2/page2';
import { appointmentsComponent } from '../pages/appointmentsComponent/appointmentsComponent';
import { directoryComponent } from '../pages/directoryComponent/directoryComponent';
import { departmentComponent } from '../pages/departmentComponent/departmentComponent';
import { modalComponent } from '../pages/modalComponent/modalComponent';
import { tabComponent } from '../pages/tabComponent/tabComponent';
import { exploreComponent } from '../pages/exploreComponent/exploreComponent';
import { guideComponent } from '../pages/guideComponent/guideComponent';
import { helpComponent } from '../pages/helpComponent/helpComponent';
import { aboutComponent } from '../pages/aboutComponent/aboutComponent';
import { cardComponent } from '../pages/cardComponent/cardComponent';
import { feedbackComponent } from '../pages/feedbackComponent/feedbackComponent';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = homeComponent;

  pages: Array<{title: string, component: any, sidebarclassname:string}>;

  constructor(public platform: Platform, private app: App) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
     
      { title: 'About', component: aboutComponent, sidebarclassname: 'page-two-icon' },
      //{ title: 'Appointments', component: appointmentsComponent },
      //{ title: 'Directory', component: directoryComponent },
      //{ title: 'Department', component: departmentComponent },
      //{ title: 'MdalComponent', component: modalComponent }
       { title: 'App Feedback', component: feedbackComponent, sidebarclassname: 'page-three-icon' },
       { title: 'Help', component: helpComponent, sidebarclassname: 'home-icon' },
       { title: 'Log Out', component: homeComponent, sidebarclassname: 'page-logout-icon' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    let tabPages = {'About': 4, 'App Feedback': 5, 'Help': 6};
    if(tabPages[page.title]) {
      this.app.getRootNav().getActiveChildNav().select(tabPages[page.title]);
    } else {
      this.nav.setRoot(page.component);
    }
  }
}
