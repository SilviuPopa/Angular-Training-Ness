import { Component } from '@angular/core';
import { Employee } from '../models/employeeModel';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  departmentNumber: number = -1;
  startNumberOfDisplayedEmployees = 0;
  endNumberOfDisplayedEmployees = 4;
  job:string = "All jobs";

  employees: Employee[] = [
    { id: 1, name: "Employee1", grade: 1, departmentNumber: 1, job: "Developer" },
    { id: 2, name: "Employee2", grade: 2, departmentNumber: 2, job: "Developer"},
    { id: 3, name: "Employee3", grade: 3, departmentNumber: 3, job: "Front End Developer"},
    { id: 4, name: "Employee4", grade: 2, departmentNumber: 3, job: "Developer"},
    { id: 5, name: "Employee5", grade: 4, departmentNumber: 2, job: "Tester" },
    { id: 6, name: "Employee6", grade: 1, departmentNumber: 2, job: "Developer" },
    { id: 7, name: "Employee7", grade: 5, departmentNumber: 1, job: "Team Lead" },
    { id: 8, name: "Employee8", grade: 5, departmentNumber: 4, job: "Developer" },
    { id: 9, name: "Employee9", grade: 3, departmentNumber: 4, job: "Manager" },
  ];

  getNextEmployees() {
    this.startNumberOfDisplayedEmployees += 4;
    this.endNumberOfDisplayedEmployees += 4;
  }

  isEndOfArray():boolean{
    return this.endNumberOfDisplayedEmployees>=this.employees.length;
  }
}
