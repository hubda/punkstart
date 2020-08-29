import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PacklistComponent } from './packlist/packlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PackSubmitComponent } from './packlist/pack-submit/pack-submit.component';
import { PackDetailsComponent } from './packlist/pack-details/pack-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PacklistComponent,
    PackSubmitComponent,
    PackDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
