import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './auth.service';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';


const routes: Routes = [
{path: 'login_form', loadChildren:'./pages/baseapplication-new/baseapplication-new.module#BaseapplicationNewModule',canLoad:[AuthService]},
{path: 'mytask', loadChildren:'./pages/mytask/mytask.module#MytaskModule',canLoad:[AuthService] },
{path: 'login', component: LoginComponent }, 
{path: 'forget_password', component: ForgetPasswordComponent }, 
{path: 'loan_sanction', loadChildren:'./pages/loan-sanction/loan-sanction.module#LoanSanctionModule',canLoad:[AuthService] },
{path: 'technical', loadChildren:'./pages/technical/technical.module#TechnicalModule',canLoad:[AuthService]},
{path: 'master', loadChildren:'./pages/master/master.module#MasterModule',canLoad:[AuthService]},
{path : '', redirectTo: '/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ } 
