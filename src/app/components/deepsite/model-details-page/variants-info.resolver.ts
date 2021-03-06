import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Response } from '@angular/http';

import { DeepsiteService } from './../deepsite.service';

@Injectable()
export class VariantsInfoResolve implements Resolve<any> {
    constructor(private deepsiteService: DeepsiteService) {}

    resolve(route: ActivatedRouteSnapshot) {
        const id = route.params['id'];

        return this.deepsiteService.getVariantsInfo(id);
    }
}
