
import { provideMockActions } from '@ngrx/effects/testing'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { hot, cold } from 'jasmine-marbles'
import { Observable } from 'rxjs'


import * as FromAction from '../actions/weather'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BrowserModule, By } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from '../../../app.routing.module'
import { WeatherModule } from '../../weather.module'
import { CommonModule, APP_BASE_HREF } from '@angular/common'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { WeatherContainer } from '../../weather.container'

import { StoreModule, Store } from '@ngrx/store'

import Spy = jasmine.Spy
import { ForecastEffects } from './weather'
import { SearchComponent } from '../../components/search/search.component';
import { ResultsComponent } from '../../components/results/results.component';
import { WeatherService } from '../../weather.service';
import { EffectsModule } from '@ngrx/effects';


describe('Weather Forecast Effects', () => {
    let effects: ForecastEffects
    let actions: Observable<any>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent, WeatherContainer, ResultsComponent],
            imports: [
                CommonModule,
                BrowserModule,
                AppRoutingModule,
                HttpModule,
                HttpClientModule,
                StoreModule.forRoot({}),
                EffectsModule.forRoot([ForecastEffects])

            ],

            providers: [
                {
                    provide: APP_BASE_HREF, useValue: '/'
                },
                ForecastEffects,
                {
                    provide: WeatherService,
                    useValue: jasmine.createSpyObj('weatherService', ['get'])
                },
                provideMockActions(() => actions),
                [Store]
            ],

        })

        effects = TestBed.get(ForecastEffects)
    })

    it('should work', () => {
        const action = new FromAction.GetforecastsAction('London')
        const completion = new FromAction.GetForcastsDoneAction(null)

        // Refer to 'Writing Marble Tests' for details on '--a-' syntax
        actions = hot('--a-', { a: action });
        const expected = cold('--b', { b: completion })

        // expect(effects.searchforecast$).toBeObservable(expected)
    });


});