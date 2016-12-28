import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import {modalComponent} from '../modalComponent/modalComponent';
declare var jQuery: any;

@Component({
  selector: 'departmentComponent',
  templateUrl: 'departmentComponent.html'
})
export class departmentComponent {

  constructor(public navCtrl: NavController,  private modalCtrl:ModalController) {
    
  }
   clicktoOpenModal(){
  let profileModal = this.modalCtrl.create(modalComponent);
   profileModal.present();
    }

 ngAfterViewInit()
  {

//Upcoming Card// Today Card
jQuery(".departmentList .upcomingClick").on('click', function () {
   jQuery('.upcomingClick').not(this).removeClass("upcomingDown");
         
  if (jQuery(this).closest('ion-card').find('.upcomingClick').hasClass("upcomingDown")) {
     jQuery(".upcomingClick").removeClass("upcomingDown");
  } else {
    jQuery(this).closest('ion-card').find('.upcomingClick').addClass("upcomingDown");
     
  }
  
        var $ans = jQuery(this).next(".wrapBox");
        $ans.slideToggle();
        jQuery(".wrapBox").not($ans).slideUp();
    });


  }


}
