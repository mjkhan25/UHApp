import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { NavController,AlertController, NavParams } from 'ionic-angular';
import {directoryComponent} from '../directoryComponent/directoryComponent';
import {tabComponent} from '../tabComponent/tabComponent';
import {Login} from '../../modal/loginModal';
import {LoginService} from '../../services/loginService';
import { Storage } from '@ionic/storage';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import {UserInformation} from '../../constants/user.information';
import _ from 'underscore';

@Component({
  selector: 'page-home1',
  templateUrl: 'homeComponent.html',
  providers:[LoginService, Storage]
})

export class homeComponent {
  public error: string
  users: FirebaseListObservable<any>;
  patientId:string;

  constructor(public navCtrl: NavController, public loginService:LoginService, public storage: Storage, public alertCtrl: AlertController, public af: AngularFire) {
    this.storage.remove('starred');
     this.storage.remove('question');

// start firebase login code
    var queryObservable = this.af.database.list('/patients', {
      query: {
        orderByChild: 'username',
        equalTo: ''
      }
    });
    queryObservable.subscribe(queriedItems => {
      //console.log(queriedItems);
    });

  }

  loginUser() {
  if(typeof(this.data.Username)==='undefined' || this.data.Username==="" || this.data.Username===null)
  {
  let prompt = this.alertCtrl.create({
    message: "Please Enter username.",
    buttons: [
      {
        text: 'OK',
        handler: data => {
          //console.log('Cancel clicked');
        }
      },
    ]
  });
  prompt.present();
  }
  else
  {
      //console.log(this.data.Username)
     var queryObservable = this.af.database.list('/patients', {
      query: {
      orderByChild: 'username',
      equalTo: this.data.Username,
    }
  });
  queryObservable.subscribe(queriedItems => {
    if (queriedItems.length ==0) {
    let prompt = this.alertCtrl.create({
      message: "Invalid username.",
      buttons: [
        {
          text: 'Ok',
          handler: data => {
           // console.log('Cancel clicked');
          }
        },
      ]
    });
    prompt.present();

      //console.log("Invalid username");
    } else {
      //this.patientId = queriedItems[0].$key;
      UserInformation.patientID = queriedItems[0].$key;
      this.navCtrl.push(tabComponent);

    }
  //  if(queriedItems.length!=0)
  //  this.navCtrl.push(tabComponent);
  });
}
    }

  data:Login=new Login();

  formSubmit(){
    // this.error = null;
    // if(this.data.Username === '' || this.data.Password === '') {
    //   this.error = 'Please Enter username and password!';
    //   return ;
    // }

    // this.loginService.ValidateLogin(this.data).subscribe((response)=>{
    //   if(response.status === 200) {
    //     this.navCtrl.push(tabComponent);
    //   } else {
    //     this.error = response.message;
    //   }
    // })
  //    if (this.data.Username == "user" && this.data.Password == "user123"){
  // this.navCtrl.push(tabComponent);
	// }
  // else{}
  }

public clickClass:string;


 directoryDetails() {
    this.clickClass =""
       this.navCtrl.push(tabComponent,{
        eventObj: 'directory'
        });
    }

}
