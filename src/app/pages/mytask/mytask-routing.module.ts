import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MytaskComponent } from './mytask.component';
import { AplicationQueueComponent } from './aplication-queue/aplication-queue.component';

const routes: Routes = [
  {path:''   , redirectTo:'task-list' ,pathMatch:'full'},
  {path:'task-list' ,component:MytaskComponent},
  {path:'app-queue' , component:AplicationQueueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MytaskRoutingModule { }
