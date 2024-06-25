import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Service/my-service.service';





@Component({
  selector: 'app-ListClass',
  templateUrl: './ListClass.component.html',
  styleUrls: ['./ListClass.component.css']
})
export class ListClassComponent implements OnInit {
  ClassData:any ={};
  GradeData:any ={};

  constructor(private myService: MyServiceService, private router: Router) {}


  ngOnInit(): void{
    this.getAllClass();
  }



  getAllClass() {
    this.myService.getAllClasses({}).subscribe(
      (data: any) => {
        this.ClassData = data;
        console.log(this.ClassData);
      },
      (error: any) => {
        console.error('Error fetching Classes:', error);
      }
    );
  }
  deleteClass(id: any) {
    this.myService.deleteClassById(id).subscribe(
      (response) => {
        console.log('Class deleted successfully:', response);
        this.getAllClass();

      },
      (error) => {
        console.error('Error deleting Class:', error);
      }
    );
  }


  getAllGrade() {
    this.myService.getAllGrades({}).subscribe(
      (data: any) => {
        this.GradeData = data;
        console.log(this.GradeData);
      },
      (error: any) => {
        console.error('Error fetching Grades:', error);
      }
    );
  }



















}
