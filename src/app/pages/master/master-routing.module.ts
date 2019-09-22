import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageUserComponent } from './manage-user/manage-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageDsaComponent } from './manage-dsa/manage-dsa.component';
import { ManagePermissionComponent } from './manage-permission/manage-permission.component'; 
import { ManageBranchComponent } from './manage-branch/manage-branch.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { AddDsaComponent } from './add-dsa/add-dsa.component';
import { AddAgencyComponent } from './add-agency/add-agency.component';
import { ProductComponent } from './product/product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AddPlrComponent } from './add-plr/add-plr.component';
import { ManageAgencyComponent } from './manage-agency/manage-agency.component';
import { ManagePlrComponent } from './manage-plr/manage-plr.component';
import { AddLTVLCRINSRFOIRComponent } from './add-ltv-lcr-insr-foir/add-ltv-lcr-insr-foir.component';
import { ManageLTVLCRINSRFOIRComponent } from './manage-ltv-lcr-insr-foir/manage-ltv-lcr-insr-foir.component';
import { ManageKycCategoryComponent } from './manage-kyc-category/manage-kyc-category.component';
import { AddKycCategoryComponent } from './add-kyc-category/add-kyc-category.component'; 
import { ManageDropdownComponent } from './manage-dropdown/manage-dropdown.component'; 



const routes: Routes = [
  
  {path:'',redirectTo:'manage_user',pathMatch:'full' },
  {path:'manage_user' , component:ManageUserComponent},
  {path:'add_user' , component:AddUserComponent},
  {path:'add_employee' , component:AddEmployeeComponent},
  {path:'manage_employee' , component:ManageEmployeeComponent},
  {path:'manage_role' , component:ManageRoleComponent},
  {path:'manage_dsa' , component:ManageDsaComponent},
  {path:'add_dsa' , component:AddDsaComponent},
  {path:'manage_permission' , component:ManagePermissionComponent},
  {path:'manage_branch' , component:ManageBranchComponent},
  {path:'add_branch' , component:AddBranchComponent},
  {path:'manage_agency' , component:ManageAgencyComponent},
  {path:'add_agency' , component:AddAgencyComponent},
  {path:'add_product' , component:ProductComponent},
  {path:'manage_product' , component:ProductManagerComponent},
  {path:'add_plr' , component:AddPlrComponent},
  {path:'manage_plr' , component:ManagePlrComponent},
  {path:'add_ltv_lcr_insr_foir' , component:AddLTVLCRINSRFOIRComponent},
  {path:'manage_ltv_lcr_insr_foir' , component:ManageLTVLCRINSRFOIRComponent},
  {path:'manage_kyc_category' , component:ManageKycCategoryComponent},
  {path:'add_kyc_category' , component:AddKycCategoryComponent},
  {path:'manage_dropdown' , component:ManageDropdownComponent}, 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
