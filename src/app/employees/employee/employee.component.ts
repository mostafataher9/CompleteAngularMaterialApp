import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { DepartmentService } from '../../shared/department.service';
import { NotificationService } from '../../shared/notification.service';
import {FormGroup, FormBuilder,Validators} from '@angular/forms'

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-employee',

  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  //!) is known as the definite assignment assertion operator. When you use ! after a variable name, 
  //it tells TypeScript that you're confident the variable will be assigned a value before it's accessed,
      form!: FormGroup;
     constructor(private fb:FormBuilder, public service: EmployeeService, public  departmentService: DepartmentService, private notificationService :NotificationService)
     {
      this.form=this.fb.group({
           fullName:['',Validators.required],
           email:['',Validators.required],
           mobile:['',Validators.required,Validators.maxLength(8)],
          city:['',Validators.required,Validators.maxLength(100)],
          gender:['',Validators.required],
          department:['',Validators.required,Validators.maxLength(100)],
          hireDate:['',Validators.required],
          isPermanent:['',Validators.required,Validators.min(18)]

      })
     }

     departments= [
     {id: 1,value: 'Dep 1'},  {id: 2,value: 'Dep 2'},  {id: 3,value: 'Dep 3'} ];

     ngOnInit(){

     }

     OnClear(){
      this.service.form.reset();// at first we call reset method of NgForm make them all null
      this.service.initializeFormGroup();  //once we reset  we want the customized initiaL values so we create ftn initializeFormGroup() in service class
     }
     OnSubmit(){
      if(this.service.form.valid){
        this.service.insertEmployees(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success('::submitted successfully');
      }
   
     }


      gmailValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
          const value = control.value;
          if (value && !value.endsWith('@gmail.com')) {
            return { gmail: true }; // validation error: not a gmail address
          }
          return null; // valid email
        };
     }
}
