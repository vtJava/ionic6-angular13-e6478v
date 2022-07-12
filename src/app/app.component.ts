import { HttpClient } from '@angular/common/http';
import { Component, Injectable, VERSION } from '@angular/core';
import { WeatherComponent } from '../pages/weather';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable()
export class AppComponent{
  
anOtherPage: WeatherComponent;

  name = 'Ionic 6 Angular ' + VERSION.major;
  capital: Object = {};  //replace any with Object 

  constructor(private http: HttpClient) {
    http
      .get('https://restcountries.com/v3.1/capital/Dublin')
      .subscribe((stuff) => (this.capital = stuff));
  }

  goAnOtherPage() {
    this.navCtrl.setRoot(WeatherComponent);
  }

  ionViewDidEnter() {
   // return HttpHeaders;
  }
}

/* getWeather(lat, lon, units) {
    return this.http.get(
      this.url + lat + '&lon=' + lon + '&key=' + this.apiKey + '&units=' + units
    );
  }*/

/*
    this.storage.get('units').then((value) => {
      //Storage of temp Units
      if (value == null) {
        console.log('No Unit value in storage');
      } else {
        this.units = value;
      }
    });

    this.storage.get('cityInfo').then((value) => {
      //Storage of City info
      if (value == null) {
        console.log('No Info found');
      } else {
        this.cityName = value;
        console.log(value);
      }
    });    
    
      //using a service called logger 
     getHeroes() {
    this.logger.log('Getting heroes ...');
    return HEROES;
  }
    https://angular.io/guide/dependency-injection
    
    */
