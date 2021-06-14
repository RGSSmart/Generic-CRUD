import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { AddEntityComponent } from './add-entity/add-entity.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    AddEntityComponent
    

  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule, 
    ReactiveFormsModule, NgbModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
