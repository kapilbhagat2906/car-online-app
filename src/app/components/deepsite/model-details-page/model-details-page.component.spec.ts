import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDetailsPageComponent } from './model-details-page.component';

describe('ModelDetailsPageComponent', () => {
    let component: ModelDetailsPageComponent;
    let fixture: ComponentFixture<ModelDetailsPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ModelDetailsPageComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModelDetailsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
