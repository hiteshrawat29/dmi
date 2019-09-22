import { MatButtonModule, MatCheckboxModule,
       MatSelectModule, MatDatepickerModule, 
       MatInputModule,MatNativeDateModule,
       MatPaginatorModule,MatTableModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';      
import { NgModule } from '@angular/core';


@NgModule({
  imports: [ MatButtonModule, MatCheckboxModule,MatSelectModule,MatInputModule,
            MatNativeDateModule,MatDatepickerModule,MatPaginatorModule,MatTableModule,NgxMatSelectSearchModule],
  exports: [MatButtonModule, MatCheckboxModule,MatSelectModule,MatInputModule,
              MatNativeDateModule,MatDatepickerModule,MatPaginatorModule,MatTableModule,NgxMatSelectSearchModule]
})

export class MaterialModule {

}