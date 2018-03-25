import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeepsiteService {

    constructor(private http: Http) { }

    getModelDetails(id: string): Observable<Response> {
        return this.http.get(`api/modeldetails/${id}`)
            .catch(this.handleError);
    }

    getVariantsInfo(id: string): Observable<Response> {
        return this.http.get(`api/variants/modelVariants/${id}`)
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error('error: ' + error);
        return Observable.throw(error);
    }

}
