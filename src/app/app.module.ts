import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SearchNavComponent } from './search-nav/search-nav.component';
import { StateService } from './state.service';
import { BilderComponent } from './steps/bilder/bilder.component';
import { NewsComponent } from './steps/news/news.component';
import { StartComponent } from './steps/start/start.component';

import { AgmCoreModule } from '@agm/core';

import { MapsComponent } from './steps/maps/maps.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { RiddlesComponent } from './riddles/riddles.component';
import { EndComponent } from './end/end.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AlertComponent } from './alert/alert.component';

import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      'pan': {
        direction: Hammer.DIRECTION_HORIZONTAL,
        threshold: 10
      },
      'pinch': { enable: false },
      'rotate': { enable: false }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchNavComponent,
    BilderComponent,
    NewsComponent,
    StartComponent,
    MapsComponent,
    HomeComponent,
    RiddlesComponent,
    EndComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhaN61-FWXh7ZQ67D5DwYEjLPmh_W47wE'
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StateService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
