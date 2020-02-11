import { Router } from '@angular/router';
import { TimelineMax } from 'gsap';

export abstract class TransitionPage {
    path: string;
    currentPage: any = null;
    reverseElements: Array<any> = [];
    _router = null;
    timeLime = null;

    constructor(router: Router) {
        this._router = router;
        this.timeLime = new TimelineMax({ paused: true, reversed: true });
    }

    onActivate(componentReference: any) {
        this.currentPage = componentReference;
        componentReference.onInit();
    }

    navigate(path: string) {
        if (path[0] !== '/') path = `/${path}`;
        if (path !== this._router.url) {
            this.currentPage.reverse().then(() => {
                this._router.navigate([path]);
            });
        }
    }

    reverse() {
        return new Promise<Boolean>((resolve: any, reject: any) => {
            this.reverseElements.forEach((tl: any) => {
                tl.timeScale(3).reverse();
            });
            this.timeLime.timeScale(3).reverse()
            this.timeLime.eventCallback("onReverseComplete", () => resolve(true))
        });
    }

    addReverseElement(element: any) {
        this.reverseElements.push(element);
    }

    abstract onInit(): void;
}