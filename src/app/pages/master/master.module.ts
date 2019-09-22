import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material';
import { MasterRoutingModule } from './master-routing.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { MasterSidebarComponent } from './master-sidebar/master-sidebar.component';
import { AddUserComponent } from './add-user/add-user.component';
import {MatRadioModule} from '@angular/material/radio';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageDsaComponent } from './manage-dsa/manage-dsa.component';
import { ManagePermissionComponent } from './manage-permission/manage-permission.component';
import { BaseapplicationNewModule } from '../baseapplication-new/baseapplication-new.module';
import { ManageBranchComponent } from './manage-branch/manage-branch.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { ManageAgencyComponent } from './manage-agency/manage-agency.component';
import { AddDsaComponent } from './add-dsa/add-dsa.component';
import { AddAgencyComponent } from './add-agency/add-agency.component';
import { ProductComponent } from './product/product.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AddPlrComponent } from './add-plr/add-plr.component';
import { ManagePlrComponent } from './manage-plr/manage-plr.component';
import { AddLTVLCRINSRFOIRComponent } from './add-ltv-lcr-insr-foir/add-ltv-lcr-insr-foir.component';
import { ManageLTVLCRINSRFOIRComponent } from './manage-ltv-lcr-insr-foir/manage-ltv-lcr-insr-foir.component';
import { ManageKycCategoryComponent } from './manage-kyc-category/manage-kyc-category.component';
import { AddKycCategoryComponent } from './add-kyc-category/add-kyc-category.component';
import { ManageDropdownComponent } from './manage-dropdown/manage-dropdown.component'; 

@NgModule({
  declarations: [
    ManageUserComponent,
    MasterSidebarComponent,
    AddUserComponent,
    AddEmployeeComponent,
    ManageEmployeeComponent,
    ManageRoleComponent,
    ManageDsaComponent,
    ManagePermissionComponent,
    ManageBranchComponent,
    AddBranchComponent,
    ManageAgencyComponent,
    AddDsaComponent,
    AddAgencyComponent,
    ProductComponent,
    ProductManagerComponent,
    AddPlrComponent,
    ManagePlrComponent,
    AddLTVLCRINSRFOIRComponent,
    ManageLTVLCRINSRFOIRComponent,
    ManageKycCategoryComponent,
    AddKycCategoryComponent,
    ManageDropdownComponent, 

  ],
  imports: [
    CommonModule,
    MasterRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatRadioModule,
    BaseapplicationNewModule
  ]
})
export class MasterModule { }
