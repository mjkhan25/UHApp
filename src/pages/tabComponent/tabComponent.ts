import { Component } from '@angular/core';

import { NavController, NavParams, Tabs } from 'ionic-angular';
import {appointmentsComponent} from '../appointmentsComponent/appointmentsComponent';
import {directoryComponent} from '../directoryComponent/directoryComponent';
import {departmentComponent} from '../departmentComponent/departmentComponent';
import {exploreComponent} from '../exploreComponent/exploreComponent';
import {guideComponent} from '../guideComponent/guideComponent';


@Component({
  selector: 'tabComponent',
  templateUrl: 'tabComponent.html'
})
export class tabComponent {
  private tab1Root:any;
  private tab2Root:any;
  private tab3Root:any;
  private tab4Root:any;
  private directoryTab:any;
  private tabsIndex:number;

  constructor(public navCtrl: NavController, private navParams:NavParams) {
  
  this.tab1Root = appointmentsComponent;
  this.tab2Root = directoryComponent;
  this.tab3Root = guideComponent;
  this.tab4Root = exploreComponent;
    this.directoryTab = navParams.get('eventObj');
     if( this.directoryTab =='directory')
    {
 
    this.tabsIndex =1;
    }
  }
}


