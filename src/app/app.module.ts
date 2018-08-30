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

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchNavComponent,
    BilderComponent,
    NewsComponent,
    StartComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
