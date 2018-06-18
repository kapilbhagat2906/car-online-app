import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';

import { HomePageService } from './components/homepage/homepage.service';
import { ScreenSizeService } from './services/screen-size.service';
import { DeepsiteService } from './components/deepsite/deepsite.service';

import { ModelDetailsResolve } from './components/deepsite/model-details-page/model-details.resolver';
import { VariantsInfoResolve } from './components/deepsite/model-details-page/variants-info.resolver';
import { BrandDetailsResolve } from './components/deepsite/brand-details-page/brand-details.resolver';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HighlightsComponent } from './components/section/highlights/highlights.component';
import { TileComponent } from './components/tile/tile.component';
import { BrandsComponent } from './components/section/brands/brands.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { ModelsComponent } from './components/section/models/models.component';
import { DeepsiteComponent } from './components/deepsite/deepsite.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterInfobarComponent } from './components/footer/footer-infobar/footer-infobar.component';
import { ModelDetailsPageComponent } from './components/deepsite/model-details-page/model-details-page.component';
import { BrandDetailsPageComponent } from './components/deepsite/brand-details-page/brand-details-page.component';
import { OverviewComponent } from './components/deepsite/model-details-page/overview/overview.component';
import { PriceComponent } from './components/deepsite/model-details-page/price/price.component';
import { SpecificationsComponent } from './components/deepsite/model-details-page/specifications/specifications.component';
import { DetailsBoxComponent } from './components/deepsite/model-details-page/overview/details-box/details-box.component';
import { ObjectKeyValuePipe } from './pipes/object-key-value/object-key-value.pipe';
import { ModelsFilterPipe } from './components/section/models/models-filter.pipe';

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
        ModelsComponent,
        DeepsiteComponent,
        AboutUsComponent,
        ContactUsComponent,
        FooterComponent,
        FooterInfobarComponent,
        ModelDetailsPageComponent,
        BrandDetailsPageComponent,
        OverviewComponent,
        PriceComponent,
        SpecificationsComponent,
        DetailsBoxComponent,
        ObjectKeyValuePipe,
        ModelsFilterPipe
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
        DeepsiteService,
        ModelDetailsResolve,
        VariantsInfoResolve,
        BrandDetailsResolve,
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
