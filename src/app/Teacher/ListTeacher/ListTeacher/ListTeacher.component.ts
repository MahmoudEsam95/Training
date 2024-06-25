import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-ListTeacher',
  templateUrl: './ListTeacher.component.html',
  styleUrls: ['./ListTeacher.component.css']
})
export class ListTeacherComponent implements OnInit {


  TeacherData:any = {};



  constructor(private myService: MyServiceService, private router: Router) {}


  ngOnInit() {
    this.getAllTeachers();
  }


  getAllTeachers() {
    this.myService.getAllTeacher({}).subscribe(
      (data: any) => {
        this.TeacherData = data;
        console.log(this.TeacherData);
      },
      (error: any) => {
        console.error('Error fetching Teachers:', error);
      }
    );
  }





  deleteTeacher(id: any) {
    this.myService.deleteTeacherById(id).subscribe(
      (response) => {
        console.log('Teacher deleted successfully:', response);
        this.getAllTeachers();

      },
      (error) => {
        console.error('Error deleting Teacher:', error);
      }
    );
  }














}
