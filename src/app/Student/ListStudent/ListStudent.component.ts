import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Service/my-service.service';



@Component({
  selector: 'app-ListStudent',
  templateUrl: './ListStudent.component.html',
  styleUrls: ['./ListStudent.component.css']
})
export class ListStudentComponent implements OnInit {

  StudentData:any ={};


  searchTerm: string = '';
  searchTerm1: string = '';

  get filteredItems() {
    if (this.searchTerm && !this.searchTerm1) {
      return this.StudentData.filter((student: { name: string }) =>
        student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else if (this.searchTerm1 && !this.searchTerm) {
      return this.StudentData.filter((student: { id: number }) =>
        student.id === parseInt(this.searchTerm1)
      );
    } else {
      return this.StudentData;
    }
  }




  constructor(private myService: MyServiceService, private router: Router) {}


  ngOnInit() {
    this.getAllStudent();
  }




  getAllStudent() {
    this.myService.getAllStudents({}).subscribe(
      (data: any) => {
        this.StudentData = data;
        console.log(this.StudentData);
      },
      (error: any) => {
        console.error('Error fetching Students:', error);
      }
    );
  }
  deleteStudent(id: any) {
    this.myService.deleteStudentById(id).subscribe(
      (response) => {
        console.log('Student deleted successfully:', response);
        this.getAllStudent();

      },
      (error) => {
        console.error('Error deleting Student:', error);
      }
    );
  }





}
