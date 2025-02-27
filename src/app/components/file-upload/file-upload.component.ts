import { Component } from '@angular/core';
import { FilesService } from '../../service/files.service';

@Component({
  selector: 'app-file-upload',
  standalone: false,
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css',
})
export class FileUploadComponent {

  //constructor to inject the service into the component for use
  constructor(private fileSvc: FilesService){}

  selectedFile: any;

  //When user selects a file to upload buthave not upload to the server yet
  handleFileUpload($event: any) {
    this.selectedFile = $event.target.files[0];
  }

  //push the file to server/save in somewhere in cold storage maybe like s3 bucket
  uploadFile() {
    if(this.selectedFile){
      this.fileSvc.uploadFile(this.selectedFile).subscribe({
        next: (response) => (console.log(response)),
        error: (error) => (console.log(error))
      })
    }
  }
}