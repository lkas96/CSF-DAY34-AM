import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component'; 
import { AngularMaterialModule } from './module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './module/app-routing/app-routing.module';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FileUploadComponent,
    GalleryComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
