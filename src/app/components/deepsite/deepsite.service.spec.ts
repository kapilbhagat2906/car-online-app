import { TestBed, inject } from '@angular/core/testing';

import { DeepsiteService } from './deepsite.service';

describe('DeepsiteService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DeepsiteService]
        });
    });

    it('should be created', inject([DeepsiteService], (service: DeepsiteService) => {
        expect(service).toBeTruthy();
    }));
});
