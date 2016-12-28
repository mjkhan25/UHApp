import { Component, EventEmitter, Output, Input } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'my-zippy',
  templateUrl: 'my-zippy.component.html'
})
export class ZippyComponent {

  @Input() isOpen = true;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();
  
  toggle() {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.opened.emit() : this.closed.emit();
  }

  constructor(public navCtrl: NavController) {
    
  }



}


