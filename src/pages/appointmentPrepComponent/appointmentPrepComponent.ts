import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {AppointmentPrepService} from '../../services/appointmentPrepService';

declare var jQuery: any;


@Component({
  selector: 'appointmentPrepComponent',
  templateUrl: 'appointmentPrepComponent.html',
  providers:[AppointmentPrepService, Storage]
})
export class appointmentPrepComponent {
  prep: string = "seeAll";
  str: string;
sendValues(): void {
//do sth with the str e.g. console.log(this.str);
}
  public clickClass:string;
  appointmentPrepData:any[];
  
  diagnosisData :any[];
  treatmentData :any[];
  dataProPlaning:any[];
  
  diagnosisStarredData :any[];
  treatmentStarredData :any[];
  dataProStarredPlaning:any[];
  questionDataStarred: any[];

  starredItems: any[];
  question: string;
  questionData:any[];
  

  constructor(
    public navCtrl: NavController,
    public appointmentPrepService:AppointmentPrepService,
    public storage: Storage
    ) {

  var _that = this; 
  this.appointmentPrepService.getAppointmentPrepData().subscribe((response)=>{   
  this.diagnosisData = response.dataDiagnosis;
  this.treatmentData = response.dataTreatment;
  this.dataProPlaning = response.proPlaning;
  
  setTimeout(function(){ jQuery( ".lastBoder .item-inner" ).last().addClass( "noLastBoder" ); }, 100);
  setTimeout(function(){ jQuery( ".lastBoder1 .item-inner" ).last().addClass( "noLastBoder" ); }, 100);
});
    
    //set previous stored data
    this.storage.get('starred').then((items) => {
      if(items) {
        this.starredItems = items;
      } else {
        this.starredItems = [];
      }
    })

    this.storage.get('question').then((items) => {
      if(items) {
        this.questionData = items;
      } else {
        this.questionData = [];
      }
    })
  }

  //set/unset star after click   
  setStarred(id) {
    let index = this.starredItems.indexOf(id);
    if(index === -1) {
      this.starredItems.push(id);
    } else {
      this.starredItems.splice(index, 1);
    }
    this.storage.set('starred', this.starredItems);
  }

  //checked previous selected star 
  checkStarred(id) {
    if(this.starredItems) {
      return (this.starredItems.indexOf(id) !== -1);
    } 
    return false;
  }

  //set data for starred tab
  tabStarred() {
// Code for Diagnosis section
    this.diagnosisStarredData = [];
    for(var i in this.diagnosisData) {
      if(this.starredItems.indexOf(this.diagnosisData[i].id) !== -1) {
        this.diagnosisStarredData.push(this.diagnosisData[i]);
      }
    };

// Code for Treatment section
   this.treatmentStarredData = [];
    for(var i in this.treatmentData) {
      if(this.starredItems.indexOf(this.treatmentData[i].id) !== -1) {
        this.treatmentStarredData.push(this.treatmentData[i]);
      }
    };

// Code for Procedure Planing
   this.dataProStarredPlaning = [];
    for(var i in this.dataProPlaning) {
      if(this.starredItems.indexOf(this.dataProPlaning[i].id) !== -1) {
        this.dataProStarredPlaning.push(this.dataProPlaning[i]);
      }
    }

  // Code for questions
   this.questionDataStarred = [];
    for(var i in this.questionData) {
      if(this.starredItems.indexOf(this.questionData[i].id) !== -1) {
        this.questionDataStarred.push(this.questionData[i]);
      }
    }

  }

//clear all star
  clearStarred() {
    this.starredItems = [];
    this.storage.remove('starred');
    this.tabStarred();
  }

//Add Question
   addQuestions() {
    let id = 'Q'+this.questionData.length;
    this.questionData.push({id:id, title: this.question});
    this.question = null;
    this.storage.set('question', this.questionData);
    }



  // code for card toggle 
  collapse(event) {
    var _current = (event.target) ? event.target : event;
    if(jQuery(_current).hasClass('cardClickDown')) {
      jQuery(_current).removeClass('cardClickDown');
    } else {
      jQuery('.prepAddQuestion .cardClickDown').removeClass('cardClickDown');
      jQuery('.prepAddQuestion .wrapBox').slideUp();
      jQuery(_current).addClass('cardClickDown');
    }
    jQuery(_current).next('.wrapBox').slideToggle();
  }

}


