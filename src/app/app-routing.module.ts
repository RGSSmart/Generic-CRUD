import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { CalendarComponent } from './calendar/calendar.component';




const routes: Routes = [
  { path: '', pathMatch:'full', component: CalendarComponent },
  { path: 'add-enity', component:AddEntityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }