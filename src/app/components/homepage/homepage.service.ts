import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HomePageService {
    homepageData: any;

    constructor(private http: Http) {
    }

    public getHomePageData(): Observable<any> {
        const apiUrl = 'api/home';

        if (this.homepageData) {
            return Observable.create((observer) => {
                observer.next(this.homepageData);
            });
        } else {
            return this.http.get(apiUrl).map(res => {
                const responseJson = res.json();

                this.homepageData = responseJson;   // cache data.
                return responseJson;
            });
        }
    }
}
