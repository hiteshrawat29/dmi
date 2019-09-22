import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MytaskRoutingModule } from './mytask-routing.module';
import { MytaskComponent } from './mytask.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { SidebarComponent } from 'src/app/pages/mytask/sidebar/sidebar.component';
import { AplicationQueueComponent } from './aplication-queue/aplication-queue.component';


@NgModule({
  declarations: [MytaskComponent,SidebarComponent,AplicationQueueComponent],
  imports: [
    CommonModule,
    MytaskRoutingModule,FormsModule,ReactiveFormsModule,
    MaterialModule
  ]
})
export class MytaskModule { }
