import { Component,OnInit } from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements  OnInit{
  listData!: MatTableDataSource<any>; //we make a listData in order list of employee be taken object table and  not array
  displayedColumns: String[]=['fullName','email','mobile','city','gender','department','hireDate','isPermanent'];//this are the name of attributes of employees that will n=be the name pf columns oin table
  //here we have employee list needs employee service in order to list all employees so we inject EmployeeService
  constructor(private service: EmployeeService) {}
  ngOnInit(){
    //once the view is opened ngOnInit() will make the service.getEmployees() to list employees
    //no need for service vfor this component bcz getEmployee already exist in EmployeeService
    this.service.getEmployees().subscribe(  (list: any)=>{
      let array= list.map((item: any)=>{
                                    return{
                                            ...item.payload.val()   // Cast the payload to the employee type
                                            //... means to be the new object containning all the properties of object
                                            // Type assertion if necessary
                                         };
                                     });
                                 this.listData=new MatTableDataSource(array);
                                },
                             
                              );
  }
}
