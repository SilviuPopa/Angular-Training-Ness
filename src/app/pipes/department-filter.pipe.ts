import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
  name: 'departmentPipe',
})
export class DepartmentPipe implements PipeTransform {
  transform(
    employees: Employee[],
    departmentNumber: number,
    job: string
  ): Employee[] {
    let output: Employee[] = employees;

    if (departmentNumber == -1 || job == 'All jobs') output = employees;
    if (departmentNumber != -1){
      return employees.filter((employee) => employee.departmentNumber == departmentNumber);
    }
    if (job != 'All jobs')
      return output.filter((employee) => employee.job == job);
    return output;
  }
}
