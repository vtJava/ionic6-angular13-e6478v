import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CityProvider {
  
  url: string;
  cityName: string="Dublin";

  constructor(public http: HttpClient) {
    console.log('Hello CityProvider');
    this.url = 'https://restcountries.com/v3.1/capital/';
  }

  getCity(cityName): Observable<any> {
    return this.http.get(this.url + cityName);
  }

  getProvCity() { return CityProvider };
}