import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-list-employees',
  standalone: false,
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css',
})
export class ListEmployeesComponent implements OnInit {
  employeesList: any;

  constructor(private empSvc: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.empSvc.getAll().subscribe((data: Employee[]) => {
      this.employeesList = data;
      console.log(this.employeesList);
    });
  }

  deleteById(id: number) {
    console.log("id selected to delete is : ", id);
    this.empSvc.deleteById(id).subscribe((data: any) => {
      this.getEmployees(); //retrieves the updated database after deletion
    });
  }

  updateById(id: number, employee: Employee){
    this.empSvc.update(id, employee).subscribe((data: any) => {
      this.getEmployees(); //force refresh
    })
  }
}
