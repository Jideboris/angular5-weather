import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeatherContainer } from './weather.container'
import { WeatherService } from './weather.service'
import { SearchComponent } from './components/search/search.component'
import { ResultsComponent } from './components/results/results.component'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { reducer } from './store/reducers/weather'
import { ForecastEffects } from './store/effects/weather'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([ForecastEffects])
  ],
  declarations: [
    SearchComponent,
    ResultsComponent,
    WeatherContainer
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }
