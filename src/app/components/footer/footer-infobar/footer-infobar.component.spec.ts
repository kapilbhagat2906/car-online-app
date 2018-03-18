import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterInfobarComponent } from './footer-infobar.component';

describe('FooterInfobarComponent', () => {
    let component: FooterInfobarComponent;
    let fixture: ComponentFixture<FooterInfobarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FooterInfobarComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterInfobarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
