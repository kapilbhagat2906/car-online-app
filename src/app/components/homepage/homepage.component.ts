import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HomePageService } from './homepage.service';

@Component({
    selector: 'mozo-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {
    trendingBrands: Array<any>;
    trendingModels: Array<any>;
    highlights: Array<any>;

    constructor(private homePageService: HomePageService) { }

    ngOnInit() {
        this.homePageService.getHomePageData().subscribe(data => {
            this.trendingBrands = (data && data.trending.brands) || [];
            this.trendingModels = (data && data.trending.models) || [];
            this.highlights = (data && data.highlights) || [];
        });
    }
}
