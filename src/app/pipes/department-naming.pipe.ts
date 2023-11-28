import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'departmentNamingPipe'
})
export class DepartmentNamingPipe implements PipeTransform {

  transform(departmentNumber:number): string {
    if(departmentNumber==1) return "Accounts";
    if(departmentNumber==2) return "Sales";
    if(departmentNumber==3) return "Marketing";
    if(departmentNumber==4) return "Finance";
    return "All departments";
  }

}
