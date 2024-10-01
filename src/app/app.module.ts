
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employees/employee/employee.component';
import { AppComponent } from './app.component';
import { EmployeeService } from './shared/employee.service';
import {environment} from '../environments/environment';

import { EmployeesComponent } from './employees/employees.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; //this to ensure that all inputs are get from browser and appears on view
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DepartmentService } from './shared/department.service';
import { SharedModule } from './shared/shared.module';
import {MaterialModule} from './material/material.module'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [EmployeeService,DepartmentService],
  bootstrap: [AppComponent],
  //Definition: entryComponents was an array in the @NgModule decorator where you listed components that should be compiled even though they are not explicitly referenced in any component's template.
  //Use Case: It was commonly used for components that were dynamically loaded or created at runtime (e.g., dialogs, modals, or other programmatically instantiated components).
})
export class AppModule { }
