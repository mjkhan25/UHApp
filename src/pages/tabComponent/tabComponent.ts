import { Component, Injectable } from '@angular/core';

import { NavController, NavParams, Tabs } from 'ionic-angular';
import {appointmentsComponent} from '../appointmentsComponent/appointmentsComponent';
import {directoryComponent} from '../directoryComponent/directoryComponent';
import {departmentComponent} from '../departmentComponent/departmentComponent';
import {exploreComponent} from '../exploreComponent/exploreComponent';
import {guideComponent} from '../guideComponent/guideComponent';
import {aboutComponent} from '../aboutComponent/aboutComponent';
import {feedbackComponent} from '../feedbackComponent/feedbackComponent';
import {helpComponent} from '../helpComponent/helpComponent';
declare var jQuery: any;

@Component({
  selector: 'tabComponent',
  templateUrl: 'tabComponent.html'
})

export class tabComponent {
  private tab1Root:any;
  private tab2Root:any;
  private tab3Root:any;
  private tab4Root:any;
  private tab5Root:any;
  private tab6Root:any;
  private tab7Root:any;
  private directoryTab:any;
  private tabsIndex:number;
  private current:any;

  constructor(public navCtrl: NavController, private navParams:NavParams) {

  //Show tab  
  this.tab1Root = appointmentsComponent;
  this.tab2Root = directoryComponent;
  this.tab3Root = guideComponent;
  this.tab4Root = exploreComponent;
  
  //Hide Tab
  this.tab5Root = aboutComponent;
  this.tab6Root = feedbackComponent;
  this.tab7Root = helpComponent;
    
    this.directoryTab = navParams.get('eventObj');
    if( this.directoryTab =='directory')
    {
    this.tabsIndex =1;
    }
  }

  closePage() {
    if(jQuery('.bar-button-default-md.show-back-button').length > 0) {
      jQuery('.bar-button-default-md.show-back-button').trigger('click');
    }
  } 
}


