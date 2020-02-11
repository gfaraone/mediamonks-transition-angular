import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineMax } from 'gsap';
import { TransitionPage } from '../transition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends TransitionPage {

  mario = new TimelineMax({ paused: true });
  luigi = new TimelineMax({ paused: true });

  constructor(private router: Router) {
    super(router)
  }

  onInit() {
    this.timeLime.to("#hello", 2, { opacity: 1, y: -60, ease: "Back.easeIn" }, 0)
    this.timeLime.to("#super", 2, { opacity: 1, y: -20, ease: "Back.easeIn" }, 1)
    this.timeLime.to("#down", 1, { display: 'block', ease: "Expo.easeInOut" }, 3);
    this.mario.to("#mario", 3, { transform: 'translateY(0)', ease: "Expo.easeInOut" }, 0);
    this.luigi.to("#luigi", 3, { transform: 'translateY(0)', ease: "Expo.easeInOut" }, 0);
    this.timeLime.play()
    this.addReverseElement(this.mario);
    this.addReverseElement(this.luigi);
    this.addScrollToAreaEvent();
  }

  addScrollToAreaEvent() {
    let observer: any = null;
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75
    };
    observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        this.luigi.play();
        this.mario.timeScale(4).reverse();
      } else {
        this.mario.play();
        this.luigi.timeScale(4).reverse();
      }
    }, options);
    observer.observe(document.querySelector('#scrollArea'));
  }

  scrollToArea() {
    document.getElementById("scrollArea").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

}
