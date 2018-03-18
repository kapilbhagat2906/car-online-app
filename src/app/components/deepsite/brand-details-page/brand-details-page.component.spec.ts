import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDetailsPageComponent } from './brand-details-page.component';

describe('BrandDetailsPageComponent', () => {
    let component: BrandDetailsPageComponent;
    let fixture: ComponentFixture<BrandDetailsPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BrandDetailsPageComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BrandDetailsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
