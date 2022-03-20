import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {PacklistComponent} from "./packlist.component";
import {PackDetailsComponent} from "./pack-details/pack-details.component";
import {PackSubmitComponent} from "./pack-submit/pack-submit.component";
import {PackSubmitModule} from "./pack-submit/pack-submit.module";

@NgModule({
  declarations: [
    PacklistComponent,
    PackDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    PackSubmitModule
  ],
  exports: [
    PacklistComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PacklistModule { }
