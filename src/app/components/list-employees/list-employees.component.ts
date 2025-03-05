import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  standalone: false,
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css',
})
export class ListEmployeesComponent implements OnInit {
  employeesList: any;

  constructor(private empSvc: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.empSvc.getAll().subscribe((data: Employee[]) => {
      this.employeesList = data;
      console.log(this.employeesList);
    });
  }

  // updateById(id: number, employee: Employee){
  //   this.empSvc.update(id, employee).subscribe((data: any) => {
  //     this.getEmployees(); //force refresh
  //   })
  // }

  viewDetails(idToView: number){
    this.router.navigate(['/employee/view'], {queryParams: {id: idToView}});
  }
}
