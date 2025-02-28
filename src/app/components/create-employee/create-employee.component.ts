import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  standalone: false,
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  form!: FormGroup;
  employee!: Employee;

  constructor(private employeeSvc: EmployeeService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      emailId: new FormControl('')
    });
  }

  postEmployee() {
    console.log('Form Post');

    this.employee = this.form.value;
    console.log(this.employee);

    this.saveEmployee();
  }

  saveEmployee() {
    this.employeeSvc.create(this.employee).subscribe(
      (data) => {
        console.log('Employee Saved');
      });
  }
}