import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepsiteComponent } from './deepsite.component';

describe('DeepsiteComponent', () => {
    let component: DeepsiteComponent;
    let fixture: ComponentFixture<DeepsiteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DeepsiteComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DeepsiteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
