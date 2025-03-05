import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from '../../components/list-employees/list-employees.component';
import { CreateEmployeeComponent } from '../../components/create-employee/create-employee.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { UpdateEmployeeComponent } from '../../components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from '../../components/employee-details/employee-details.component';

const routes: Routes = [
  { path: 'employee/list', component: ListEmployeesComponent }, // show list of all employees
  { path: 'employee/create', component: CreateEmployeeComponent }, // show create form employee
  { path: 'employee/update', component: UpdateEmployeeComponent }, //show update form
  { path: 'gallery', component: GalleryComponent }, // show image ggallery
  { path: 'employee/view', component: EmployeeDetailsComponent} //view specific employee details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
