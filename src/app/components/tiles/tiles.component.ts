import { Component, OnInit, AfterViewInit, ViewEncapsulation, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
    selector: 'mozo-tiles',
    templateUrl: './tiles.component.html',
    styleUrls: ['./tiles.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TilesComponent implements OnInit, AfterViewInit {
    @Input() items: Array<any>;
    @Input() direction: string;

    SwiperConfig: SwiperConfigInterface = {};

    constructor() { }

    ngAfterViewInit() {
        this.SwiperConfig = {
            navigation: {
                nextEl: '.swiper-nav-button-next',
                prevEl: '.swiper-nav-button-prev'
            },
            slidesPerView: 1,
            pagination: {
                clickable: true,
                el: '.swiper-pagination'
            },
            keyboard: true
        };
    }

    ngOnInit() {

    }

}
