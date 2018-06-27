import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from '../weather/components/search/search.component'
import { BrowserModule, By } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from '../app.routing.module'
import { WeatherModule } from './weather.module'
import { CommonModule, APP_BASE_HREF } from '@angular/common'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { WeatherContainer } from './weather.container'
import { Store } from '@ngrx/store'
import { StoreModule } from '@ngrx/store'
import { ResultsComponent } from './components/results/results.component';
import { EffectsModule } from '@ngrx/effects'
import { ForecastEffects } from './store/effects/weather'
import { WeatherService } from './weather.service'
import { provideMockActions } from '@ngrx/effects/testing'
import { Observable } from 'rxjs'

describe('WeatherContainer', () => {
  let component: WeatherContainer;
  let fixture: ComponentFixture<WeatherContainer>;
  let effects: ForecastEffects
  let actions: Observable<any>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, WeatherContainer],
      imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        HttpClientModule,
        StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: APP_BASE_HREF, useValue: '/'
        }, [Store]
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainer)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });

})
