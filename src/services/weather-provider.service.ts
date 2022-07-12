import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class WeatherProvider {

  apiKey = 'dbccf226a18e49b8957e114ac17a7421';
  url: string;
  constructor(public http: HttpClient ) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(lat, lon, units): Observable<any>{
    this.url = 'http://api.weatherbit.io/v2.0/current?lat=';
    return this.http.get(this.url + lat + '&lon=' + lon + "&key=" + this.apiKey + '&units=' + units);
  }

  //getProvWeather() { return WeatherProvider };

  //this.http.get('/app/lists.json').map((res:Response) => res.json());

} //'http://api.weatherbit.io/v2.0/current?lat=53.270962&lon=-9.062691&key=dbccf226a18e49b8957e114ac17a7421&units=celsius'
