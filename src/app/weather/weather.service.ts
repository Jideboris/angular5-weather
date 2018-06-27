import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Forecast } from '../model/weather'
import { HttpClient } from '@angular/common/http';


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
    // this.getForecast('London').subscribe(res => {
    //   console.log(res)
    // })
  }

  getForecast(city: string): Observable<Forecast[]> {
    this.params.q = city
    return this.http.get<Forecast[]>(this.url, { params: this.params })
  }
}