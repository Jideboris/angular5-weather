import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app.routing.module'
import { WeatherModule } from './weather/weather.module'

import {HttpModule} from '@angular/http'
import {HttpClientModule} from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { reducers, metaReducers} from './weather/store/reducers'
import { ForecastEffects } from './weather/store/effects/weather'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    HttpModule,
    HttpClientModule,
    //StoreModule.forRoot(reducers, { metaReducers }),
   // EffectsModule.forRoot([ForecastEffects])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
