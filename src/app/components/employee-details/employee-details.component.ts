import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{

  selectedEmployee!: Employee;

  constructor(private empSvc: EmployeeService,private aRoute: ActivatedRoute, private router:Router){}

  ngOnInit(): void {

    this.aRoute.queryParams.subscribe(params => {
      
      console.log('Incoming ID to view: ', params['id'])

      this.getEmployeeById(params['id']);
    })  
  }

  getEmployeeById(id: number){
    this.empSvc.getById(id).subscribe((data: Employee) => {
      this.selectedEmployee = data;
      console.log('Retrieved: ', this.selectedEmployee);
    })
  }

  deleteById(id: number) {
    console.log("id selected to delete is : ", id);
    this.empSvc.deleteById(id).subscribe((data: any) => {
      this.router.navigate(['/employee/list']); //return to show all list
    });
  }

  updateByIdPage(idToUpdate: number){
    this.router.navigate(['/employee/update'], { queryParams: { id: idToUpdate } }); //{fieldName : value} for queryparam
    //when clicking this, should redirect to this new form
  }

}
