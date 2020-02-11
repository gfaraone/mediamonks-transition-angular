import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransitionPage } from '../transition.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends TransitionPage {

  constructor(private router: Router) {
    super(router)
  }

  onInit() {
    this.timeLime.to("#line-1", 1, { opacity: 1, y: -10, ease: "Back.easeIn" }, 0)
    this.timeLime.to("#line-2", 1, { opacity: 1, y: -10, ease: "Back.easeIn" }, 1)
    this.timeLime.to("#line-3", 1, { opacity: 1, y: -10, ease: "Back.easeIn" }, 2)
    this.timeLime.to("#cta", 1, { opacity: 1, y: -10, ease: "Back.easeIn" }, 3)
    this.timeLime.to("#mario", 3, { right: '0', ease: "Expo.easeInOut" }, 3);
    this.timeLime.play()
  }

}
