import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-EditGrade',
  templateUrl: './EditGrade.component.html',
  styleUrls: ['./EditGrade.component.css']
})
export class EditGradeComponent implements OnInit {

  ClassData:any = {};
  GradeData:any = {};
  StageData:any = {};
  SubjectsData:any = {};

  ClassByIdData:any = {};
  StageByIdData:any = {};
  GradeByIdData:any = {};
  GradeId:number=0;

  constructor(private myService:MyServiceService,private router: Router, private route: ActivatedRoute) {

    this.GradeId = Number(this.route.snapshot.params['id']);
    this.getGradeByID(this.GradeId);

  }

  ngOnInit():void {
    this.getAllStages();
  }



  getGradeByID(id: number) {
    this.myService.getGradeById(id).subscribe(
      (response) => {
        console.log(response);
        this.GradeByIdData = response;
      },
      (error) => {
        console.error('Error getting element:', error);
      }
    );
  }



  getAllGrades() {
    this.myService.getAllGrades({}).subscribe(
      (response) => {
      this.GradeData = response;
      },
      (error) => {
        console.error('Error Getall grades:', error);
      }
    );
  }

  getAllStages() {
    this.myService.getAllStages({}).subscribe(
      (response) => {
      this.StageData = response;
      },
      (error) => {
        console.error('Error Getall stages:', error);
      }
    );
  }
  EditGrade(id:number,data:any) {
    this.myService.editGrade(id,this.GradeByIdData).subscribe((data) =>
      {
        console.log(data);
        this.router.navigate(['/listGrade']);
      },
    (err) => {
      console.log('error edit Grade', err );
    }
    );
    }















}
