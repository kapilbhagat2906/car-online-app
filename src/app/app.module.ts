import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { HomePageService } from './components/homepage/homepage.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HighlightsComponent } from './components/section/highlights/highlights.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomepageComponent,
        HighlightsComponent
    ],
    imports: [
        BrowserModule,
        MDBBootstrapModule.forRoot(),
        HttpModule,
        AppRoutingModule
    ],
    providers: [
        HomePageService
    ],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
