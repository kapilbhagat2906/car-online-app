import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
    selector: 'mozo-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
    showNavMenu: Boolean = false;
    isSmallScreen: Boolean;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.resize(event);
    }

    constructor(private screenSizeService: ScreenSizeService) {
        const winWidth = window.innerWidth;

        this.isSmallScreen = this.screenSizeService.isSmallScreen(winWidth);
    }

    ngOnInit() {
    }

    toggleNavMenu() {
        this.showNavMenu = !this.showNavMenu;
    }

    resize(event) {
        const winWidth = event.target.innerWidth;

        this.isSmallScreen = this.screenSizeService.isSmallScreen(winWidth);
    }
}
