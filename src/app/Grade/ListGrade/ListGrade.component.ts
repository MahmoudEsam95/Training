import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-ListGrade',
  templateUrl: './ListGrade.component.html',
  styleUrls: ['./ListGrade.component.css']
})
export class ListGradeComponent implements OnInit {

  GradeData:any ={};

  constructor(private myService: MyServiceService, private router: Router) {}

  ngOnInit():void {
    this.getAllGrade();
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
  deleteGrade(id: any) {
    this.myService.deleteGradeById(id).subscribe(
      (response) => {
        console.log('Grade deleted successfully:', response);
        this.getAllGrade();

      },
      (error) => {
        console.error('Error deleting Grade:', error);
      }
    );
  }





}
