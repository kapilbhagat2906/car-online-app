import { Component, OnInit, AfterViewInit, OnChanges, ViewEncapsulation, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
    selector: 'mozo-tiles',
    templateUrl: './tiles.component.html',
    styleUrls: ['./tiles.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TilesComponent implements OnInit, AfterViewInit, OnChanges {
    @Input() items: Array<any>;
    @Input() direction: string;
    @Input() tilesPerView: number;

    SwiperConfig: SwiperConfigInterface = {};

    constructor() { }

    ngAfterViewInit() {
        this.SwiperConfig = {
            navigation: {
                nextEl: '.swiper-nav-button-next',
                prevEl: '.swiper-nav-button-prev'
            },
            slidesPerView: this.tilesPerView || 'auto',
            pagination: {
                clickable: true,
                el: '.swiper-pagination'
            },
            keyboard: true,
            spaceBetween: 4
        };
    }

    ngOnInit() {

    }

    ngOnChanges() {
        this.SwiperConfig.slidesPerView = this.tilesPerView || 'auto';
    }

}
