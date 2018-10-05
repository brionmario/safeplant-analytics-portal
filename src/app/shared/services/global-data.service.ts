import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptionsArgs, Response, XHRBackend, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import "rxjs/add/observable/interval";
import { IHeartRate } from '../models/heart-rate.model';
import { IBloodReport } from '../models/blood-report.model';
import { IUrineReport } from "../models/urine-report.model";
import { IBloodSugarReport } from "../models/blood-sugar.model";

@Injectable()
export class GlobalDataService {

    public apiEndPoint:string;

    constructor(private http:Http) {

        this.apiEndPoint = 'https://safeplant.herokuapp.com/api/';

    }

    public getHeartRate():Observable<IHeartRate[]> {
        let headers = new Headers({'Content_Type': 'application/json'});
        return Observable.interval(1000)
            .switchMap(() => this.http.get(this.apiEndPoint + 'heartrates')
                .map((response:Response) => {
                    return response.json();
                }));
    }

    public getBodyTemperature():Observable<any> {
        let headers = new Headers({'Content_Type': 'application/json'});
        return Observable.interval(1000)
            .switchMap(() => this.http.get(this.apiEndPoint + 'bodytemperatures')
                .map((response:Response) => {
                    return response.json();
                }));
    }

    public getBloodPressure():Observable<any> {
        let headers = new Headers({'Content_Type': 'application/json'});
        return Observable.interval(1000)
            .switchMap(() => this.http.get(this.apiEndPoint + 'bloodpressures')
                .map((response:Response) => {
                    return response.json();
                }));
    }

    public getCaloriesBurnt():Observable<any> {
        let headers = new Headers({'Content_Type': 'application/json'});
        return Observable.interval(1000)
            .switchMap(() => this.http.get(this.apiEndPoint + 'calories')
                .map((response:Response) => {
                    return response.json();
                }));
    }

    public getStepsTaken():Observable<any> {
        let headers = new Headers({'Content_Type': 'application/json'});
        return Observable.interval(1000)
            .switchMap(() => this.http.get(this.apiEndPoint + 'steps')
                .map((response:Response) => {
                    return response.json();
                }));
    }

    public getDistance():Observable<any> {
        let headers = new Headers({'Content_Type': 'application/json'});
        return Observable.interval(1000)
            .switchMap(() => this.http.get(this.apiEndPoint + 'distances')
                .map((response:Response) => {
                    return response.json();
                }));
    }

    public getBloodSugar():Observable<IBloodSugarReport[]> {
        let headers = new Headers({'Content_Type': 'application/json'});
        return Observable.interval(1000)
            .switchMap(() => this.http.get(this.apiEndPoint + 'bloodsugars')
                .map((response:Response) => {
                    return response.json();
                }));
    }
    public getBloodreport():Observable<IBloodReport[]> {
        let headers = new Headers({'Content_Type': 'application/json'});
        return Observable.interval(1000)
            .switchMap(() => this.http.get(this.apiEndPoint + 'blood')
                .map((response:Response) => {
                    return response.json();
                }));
    }
    public getUrinereport():Observable<IUrineReport[]> {
        let headers = new Headers({'Content_Type': 'application/json'});
        return Observable.interval(1000)
            .switchMap(() => this.http.get(this.apiEndPoint + 'urines')
                .map((response:Response) => {
                    return response.json();
                }));
    }

}
