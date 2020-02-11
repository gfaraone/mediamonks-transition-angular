import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineMax } from 'gsap';
import { TransitionPage } from './transition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends TransitionPage implements OnInit {
  title = 'transition-angular';
  menu = new TimelineMax({ paused: true, reversed: true });

  constructor(private router: Router) {
    super(router)
  }

  ngOnInit() {
    this.menu.to("#topLine", .5, { rotation: '45', x: 5, y: 1, scale: 0.7, stroke: 'white', ease: "Expo.easeInOut" }, 0)
    this.menu.to("#midLine", .5, { opacity: '0', stroke: 'white', ease: "Expo.easeInOut" }, 0)
    this.menu.to("#botLine", .5, { rotation: '-45', x: 5, scale: 0.7, stroke: 'white', ease: "Expo.easeInOut" }, 0)
    this.menu.to("#sideMenu", .5, { transform: 'translateX(0)', ease: "Expo.easeInOut" }, 0)
  }

  menuClick() {
    this.menu.reversed() ? this.menu.play() : this.menu.reverse();
  }

  onInit() { }

}
