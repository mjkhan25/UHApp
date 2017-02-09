import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
declare var jQuery: any;

@Component({
  selector: 'checkinModal',
  templateUrl: 'checkinModal.html'
})
export class checkinModal {

  constructor(public navCtrl: NavController) {
    
  }

  // code start for check In Modal
  ngAfterViewInit(){
  
    jQuery(function(){
      var seconds = jQuery('.progress-pie-chart').data('percent');
      var startPerson = jQuery('.progress-pie-chart').data('start-person');
  
  //drawCircle();
  
  function countdown() {
    function tick() {
      drawCircle();
    }
    tick();
  }
  
  function calculatePercent() {
    return parseInt(jQuery('.progress-pie-chart').data('percent'));
  }
  
  function drawCircle() {
  //360*(seconds/startTime)
    var  percent = calculatePercent();
    var deg = (360/12)*(percent-parseInt(startPerson));
    var people = percent-parseInt(startPerson); 
    
    if (people > 5) {
      jQuery('.progress-pie-chart').addClass('gt-50');
    } else {
      jQuery('.progress-pie-chart').removeClass('gt-50');
    }
 
    jQuery('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

    jQuery('.ppc-percents span').html(people+'<br><span class="personName"> People</span>');
  }

  // start the countdown
  countdown();
});
  }
 // code end for check In Modal  
  

  


}


