import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { StartPageComponent } from './start-page/start-page.component';



const routes: Routes = [
  { path: '', pathMatch:'full', component: StartPageComponent },
  { path: 'add-enity', component:AddEntityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }