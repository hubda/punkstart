import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {CardPickerModule} from "./card-picker/card-picker.module";
import {AppComponent} from "../../app.component";
import {PackSubmitComponent} from "./pack-submit.component";

@NgModule({
  declarations: [
    PackSubmitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    CardPickerModule
  ],
  exports: [
    PackSubmitComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class PackSubmitModule { }
