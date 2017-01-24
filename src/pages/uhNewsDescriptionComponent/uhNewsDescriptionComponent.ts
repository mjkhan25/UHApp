import { Component } from '@angular/core';
//import { NavParams } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'uhNewsDescriptionComponent',
  templateUrl: 'uhNewsDescriptionComponent.html'
 
})
export class uhNewsDescriptionComponent {
   fullDesc:string;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    )
  
   {
  this.fullDesc = params.get('newsDataDesc');;

  }
}


