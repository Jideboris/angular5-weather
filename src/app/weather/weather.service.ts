import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import { catchError } from 'rxjs/operators'

import { Http, Response } from '@angular/http'

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

import { Forecast } from '../model/weather'

@Injectable()
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/forecast'
  params = {
    q: '',
    cnt: '8',
    units: 'metric',
    APPID: '010721642521f31b0fbc8c3831d45951'
  };

  constructor(private http: HttpClient) {
    // console.log(http)
    // this.searchWeatherForCity('London').subscribe(res => {
    //   console.log(res)
    // })
  }

  getForecast(city: string): Observable<Forecast[]> {
    console.log(city)
    this.params.q = city
    console.log(this.params)
    return this.http.get<Forecast[]>(this.url, { params: this.params })
  }

  private extractData(res: Response): Forecast[] {
    const body = res.json().report.foods[0];
    return []
  }
  private handleError(error: Response | any) {
    let errorMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMsg = err;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errorMsg);
  }
}


