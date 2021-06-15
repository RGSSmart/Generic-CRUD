import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormControl, FormGroup } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
@NgModule({
  declarations: [

    AppComponent,
    CalendarComponent,],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    NgbModule,
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
