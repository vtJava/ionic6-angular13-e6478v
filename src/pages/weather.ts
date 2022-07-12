import { Component, Input, VERSION, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { WeatherProvider } from '../services/weather-provider.service';
import { CityProvider } from '../services/city-provider.service';

@Component({
  selector: 'weather',
  templateUrl:'./weather.html',
  providers: [ WeatherProvider, CityProvider ],
})
export class WeatherComponent implements OnInit {
  @Input() name: string;

    private _storage: Storage | null = null;
  
    city: String = 'Dublin';
    cityName: any = {};
    weatherInfo: any = {};
    units: string;
    lat: string;
    lng: string;
    weather = true;
  
    constructor(
      public http: HttpClient,public navCtrl: NavController,public wp: WeatherProvider,
      private storage: Storage
    ){
      http
      .get('https://restcountries.com/v3.1/capital/Dublin/')
      .subscribe((weather) => (this.weather));
    }
  
    async ngOnInit() {
      this.weatherInfo.getWeather().subscribe(response =>
        this.weatherInfo=response.weatherInfo)
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      const storage = await this.storage.create(this.weatherInfo);
      this._storage = storage;
    }
  
    // Create and expose methods that users of this service can
    // call, for example:
    public set(key: string, value: any) {
      this._storage?.set(key, value);
    }
  
    ionViewDidEnter() {
      //boolean load a method as true and else a false to show false
      //load this provider  to use the import
      //retrieve the storage data with this function
      this.storage.get('cityName').then((value) => {
        //Storage of City (capital)
        if (value == null) {
          this.weather = true;
          console.log('No City value in storage');
        } else {
          this.weather = false;
          this.city = value;
          console.log(value);
        }
      });
  
      this.storage.get('weatherInfo').then((value) => {
        //Storage of weather info
        if (value == null) {
          console.log('No Info found');
        } else {
          this.weatherInfo = value;
        }
      });
    }
  
    ionViewDidLoad() {
      //todo
    }
  }
