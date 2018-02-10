import { Component, OnInit, ViewEncapsulation, Input, HostListener, AfterViewInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
    selector: 'mozo-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BrandsComponent implements OnInit, AfterViewInit {
    @Input() items: Array<any>;
    SwiperConfig: SwiperConfigInterface = null;
    @HostListener('window:resize', ['$event'])
    onResize(event) {

    }

    ngAfterViewInit() {
        this.SwiperConfig = {
            navigation: {
                nextEl: '.swiper-nav-button-next',
                prevEl: '.swiper-nav-button-prev'
            },
            slidesPerView: 4,
            pagination: {
                clickable: true,
                el: '.swiper-pagination'
            },
            keyboard: true
        };
    }

    constructor() { }

    ngOnInit() {
    }

}
