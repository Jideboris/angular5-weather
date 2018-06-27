import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchComponent } from './search.component'
import { BrowserModule, By } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from '../../../app.routing.module'
import { WeatherModule } from '../../weather.module'
import { CommonModule, APP_BASE_HREF } from '@angular/common'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { WeatherContainer } from '../../weather.container'
import { Store } from '@ngrx/store'
import { StoreModule } from '@ngrx/store'

import Spy = jasmine.Spy

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

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
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(fixture.debugElement.query(By.css('button')))
    expect(component).toBeTruthy();
  })
  it('should consist search  button', () => {
    let button = fixture.debugElement.query(By.css('button'))
    expect(button).toBeDefined()
  })

});
