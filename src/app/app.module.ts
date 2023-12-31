import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenderPipePipe } from './pipes/gender.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeGradesPipePipe } from './pipes/employee-grades-pipe.pipe';
import { DepartmentPipe } from './pipes/department-filter.pipe';
import { FormsModule } from '@angular/forms';
import { DepartmentNamingPipe } from './pipes/department-naming.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterByCateogryPipe } from './pipes/filter-by-cateogry.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GenderPipePipe,
    EmployeeComponent,
    EmployeeGradesPipePipe,
    DepartmentPipe,
    DepartmentNamingPipe,
    ProductListComponent,
    FilterByCateogryPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
