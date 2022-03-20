import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from '../../../app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from "@angular/material/select";
import {CardPickerComponent} from './card-picker.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CardPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule
  ],
  exports: [
    CardPickerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CardPickerModule { }
