import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {CardPickerModule} from "./packlist/pack-submit/card-picker/card-picker.module";
import {PacklistModule} from "./packlist/packlist.module";


//routes
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PacklistModule,
    MatSelectModule,
    CardPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
