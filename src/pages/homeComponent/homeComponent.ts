import { Component } from '@angular/core';
import {Http} from '@angular/http';
import { NavController } from 'ionic-angular';
import {directoryComponent} from '../directoryComponent/directoryComponent';
import {tabComponent} from '../tabComponent/tabComponent';
import {Login} from '../../modal/loginModal';
import {LoginService} from '../../services/loginService';

@Component({
  selector: 'page-home1',
  templateUrl: 'homeComponent.html',
  providers:[LoginService]
})

export class homeComponent {
constructor(public navCtrl: NavController, public loginService:LoginService ) { 
  }

  data:Login=new Login();

formSubmit(){
  // this.loginService.ValidateLogin(this.data).subscribe((res)=>{
  //   console.log(res);
  //  //debugger;
  //  }) 
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

