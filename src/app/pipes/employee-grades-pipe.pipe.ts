import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
  name: 'employeeGradesPipe'
})
export class EmployeeGradesPipePipe implements PipeTransform {

  transform(grade: number): string {

    if (grade == 1) return "Outstanding";
    if (grade == 2) return "Excellent";
    if (grade == 3) return "Good";
    if (grade == 4) return "Average";
    if (grade == 5) return "Bad";

    return "No grade";
  }

}
