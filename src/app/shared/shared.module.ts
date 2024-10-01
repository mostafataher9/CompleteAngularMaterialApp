import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeListComponent } from '../employees/employee-list/employee-list.component';



@NgModule({
  declarations: [ EmployeesComponent,EmployeeListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
