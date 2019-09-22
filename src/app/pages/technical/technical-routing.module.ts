import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnicalFiringComponent } from './technical-firing/technical-firing.component';
import { TechnicalReportComponent } from './technical-report/technical-report.component';
 
const routes: Routes = [
  {path:'',redirectTo:'technical-firing' ,pathMatch:'full'},
  {path:'technical-firing' , component:TechnicalFiringComponent},
  {path:'technical-report' , component:TechnicalReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalRoutingModule { }
