import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { NavController } from 'ionic-angular';
import {directoryComponent} from '../directoryComponent/directoryComponent';
import {tabComponent} from '../tabComponent/tabComponent';
import {Login} from '../../modal/loginModal';
import {LoginService} from '../../services/loginService';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home1',
  templateUrl: 'homeComponent.html',
  providers:[LoginService, Storage]
})

export class homeComponent {
  public error: string
  
  constructor(public navCtrl: NavController, public loginService:LoginService, public storage: Storage) { 
    this.storage.remove('starred');
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
     if (this.data.Username == "user" && this.data.Password == "user123"){
  this.navCtrl.push(tabComponent);
	}
  else{}
  }

public clickClass:string;
  

 directoryDetails() {
    this.clickClass =""
       this.navCtrl.push(tabComponent,{
        eventObj: 'directory'
        });
    }

}

