import { Component, OnInit, ViewEncapsulation, Input, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ScreenSizeService } from '../../../services/screen-size.service';
@Component({
    selector: 'mozo-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BrandsComponent implements OnInit, AfterViewInit {
    @Input() items: Array<any>;
    SwiperConfig: SwiperConfigInterface = {};

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.resize(event);
    }

    ngAfterViewInit() {
        const winWidth = window.innerWidth;
        const deviceType = this.screenSizeService.getDeviceType(winWidth);
        const swiperSlidesPerView = this.getSwiperSlidesPerView(deviceType);

        this.SwiperConfig = {
            navigation: {
                nextEl: '.swiper-nav-button-next',
                prevEl: '.swiper-nav-button-prev'
            },
            slidesPerView: swiperSlidesPerView,
            pagination: {
                clickable: true,
                el: '.swiper-pagination'
            },
            keyboard: true
        };
    }

    constructor(
        private screenSizeService: ScreenSizeService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    resize(event) {
        const winWidth = event.target.innerWidth;
        const deviceType = this.screenSizeService.getDeviceType(winWidth);
        const swiperSlidesPerView = this.getSwiperSlidesPerView(deviceType);

        this.SwiperConfig.slidesPerView = swiperSlidesPerView;
    }

    getSwiperSlidesPerView(deviceType) {
        let swiperSlidesPerView;

        switch (deviceType) {
            case 'tn':
            case 'xs': swiperSlidesPerView = 2;
                break;
            case 'sm':
            case 'md': swiperSlidesPerView = 3;
                break;
            case 'lg': swiperSlidesPerView = 4;
                break;
            default: swiperSlidesPerView = 4;
        }

        return swiperSlidesPerView;
    }

    showDetails(brandId) {
        this.router.navigate(['detail/brand', brandId]);
    }

}
