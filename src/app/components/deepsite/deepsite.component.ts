import { Component, OnInit, OnDestroy, ViewEncapsulation, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'mozo-deepsite',
    templateUrl: './deepsite.component.html',
    styleUrls: ['./deepsite.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DeepsiteComponent implements OnInit, OnDestroy {
    isOpened: boolean;

    constructor(
        private renderer: Renderer,
        private router: Router
    ) { }

    ngOnInit() {
        this.renderer.setElementClass(document.body, 'deepsite-open', true);
        this.isOpened = true;
    }

    ngOnDestroy() {
        this.renderer.setElementClass(document.body, 'deepsite-open', false);
    }

    closeDeepsite() {
        this.router.navigate(['home']);
    }

}
