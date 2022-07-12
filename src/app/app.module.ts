import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { WeatherComponent } from '../pages/weather';
import { HttpClientModule } from '@angular/common/http';
import { WeatherProvider } from '../services/weather-provider.service';
import { CityProvider } from '../services/city-provider.service';
import { NavController } from '@ionic/angular';
//import { UrlSerializer } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //IonicStorageModule.forRoot(AppComponent),
    IonicModule.forRoot(),
    
  ],
  declarations: [AppComponent, WeatherComponent],
  bootstrap: [AppComponent, WeatherComponent, NavController ], //added NavController
  providers: [CityProvider, WeatherProvider],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
