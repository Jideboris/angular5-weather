import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app.routing.module'
import { WeatherModule } from './weather/weather.module'

import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'

import { reducers, metaReducers} from './weather/store/reducers'
import { ForecastEffects } from './weather/store/effects/weather'


import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    HttpModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
