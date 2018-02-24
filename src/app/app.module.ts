import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';

import { HomePageService } from './components/homepage/homepage.service';
import { ScreenSizeService } from './services/screen-size.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HighlightsComponent } from './components/section/highlights/highlights.component';
import { TileComponent } from './components/tile/tile.component';
import { BrandsComponent } from './components/section/brands/brands.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { ModelsComponent } from './components/section/models/models.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomepageComponent,
        HighlightsComponent,
        TileComponent,
        BrandsComponent,
        SvgIconComponent,
        TilesComponent,
        ModelsComponent
    ],
    imports: [
        BrowserModule,
        MDBBootstrapModule.forRoot(),
        HttpModule,
        AppRoutingModule,
        SwiperModule
    ],
    providers: [
        HomePageService,
        ScreenSizeService,
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
