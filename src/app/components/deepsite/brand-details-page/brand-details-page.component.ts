import { Component, OnInit, AfterViewInit, ViewEncapsulation, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenSizeService } from '../../../services/screen-size.service';

@Component({
    selector: 'mozo-brand-details-page',
    templateUrl: './brand-details-page.component.html',
    styleUrls: ['./brand-details-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BrandDetailsPageComponent implements OnInit, AfterViewInit {
    brandDetailsData: any;
    modelCategories: any = [
        {
            'criteria': {

            }
        }
    ];
    tilesPerView: number;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.resize(event);
    }

    constructor(
        private route: ActivatedRoute,
        private screenSizeService: ScreenSizeService
    ) { }

    ngOnInit() {
        this.route.data
            .subscribe((data: any) => {
                if (data) {
                    this.brandDetailsData = data.brandDetails && data.brandDetails.json();
                    if (this.brandDetailsData && Array.isArray(this.brandDetailsData.models)) {
                        this.brandDetailsData.models = this.brandDetailsData.models.map((model) => {
                            return model.modelOverview;
                        });
                    }
                }
            });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            const winWidth = window.innerWidth;
            const deviceType = this.screenSizeService.getDeviceType(winWidth);
            this.tilesPerView = this.getSwiperSlidesPerView(deviceType);
        });
    }

    resize(event) {
        const winWidth = event.target.innerWidth;
        const deviceType = this.screenSizeService.getDeviceType(winWidth);
        this.tilesPerView = this.getSwiperSlidesPerView(deviceType);
    }

    getSwiperSlidesPerView(deviceType) {
        let swiperSlidesPerView;

        switch (deviceType) {
            case 'tn':
            case 'xs': swiperSlidesPerView = 1;
                break;
            case 'sm':
            case 'md': swiperSlidesPerView = 3;
                break;
            case 'lg': swiperSlidesPerView = 3;
                break;
            default: swiperSlidesPerView = 3;
        }

        return swiperSlidesPerView;
    }

}
