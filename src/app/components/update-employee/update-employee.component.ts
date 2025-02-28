import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{

  form!: FormGroup;
  employee!: Employee;

  constructor(private employeeSvc: EmployeeService, private aRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    var incomingId;

    this.aRoute.queryParams.subscribe(params => {
      incomingId = params['id'];
      console.log('Incoming ID to update received: ', incomingId)
    })

    this.form = new FormGroup({
      id: new FormControl(incomingId),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      emailId: new FormControl('')
    });
  }

  updateEmployee(){
    console.log('Updating Employee');

    this.employee = this.form.value;
    console.log(this.employee);

    this.saveUpdatedEmployee(this.employee);
  }

  saveUpdatedEmployee(saveEmp: Employee){
    this.employeeSvc.update(saveEmp.id, saveEmp).subscribe(
      (data) => {
        console.log('Employee Updated');

        //redireeect back to employee list for viewing
        this.router.navigate(['/employee/list']);
      }
    )
  }


}
