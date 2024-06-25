import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-EditClass',
  templateUrl: './EditClass.component.html',
  styleUrls: ['./EditClass.component.css'],
})
export class EditClassComponent implements OnInit {
  ClassData: any = {};
  ClassByIdData: any = {};
  GradeData: any[] = [];
  getAllGradesbyStageIdData: any = [];
  StageData: any[] = [];
  c: any = {};

  onStageChange(e: Event) {
    this.c = (e.target as HTMLInputElement).value;
    this.getAllGradesbyStageId(this.c);
  }

  ClassId: number = 0;

  constructor(
    private myService: MyServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ClassId = Number(this.route.snapshot.params['id']);
    this.getClassByID(this.ClassId);
    this.getAllGrades();
    this.getAllClasses();
    this.getAllStages();

  }

  EditClass(id: number, data: any) {
    this.myService.editClass(id, this.ClassByIdData).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/listClass']);
      },
      (err) => {
        console.log('error edit class', err);
      }
    );
  }

  getAllGradesbyStageId(id: number) {
    this.myService.getAllGradesbyStageId(id).subscribe(
      (data) => {
        console.log(data);
        this.getAllGradesbyStageIdData = data;
      },
      (err) => {
        console.error('Error getting elements:', err);
      }
    );
  }

  getClassByID(id: number) {
    this.myService.getClassById(id).subscribe(
      (response) => {
        console.log(response);
        this.ClassByIdData = response;
        this.getAllGradesbyStageId(this.ClassByIdData.grade.stageId);
      },

      (error) => {
        console.error('Error getting element:', error);
      }
    );
  }

  getAllClasses() {
    this.myService.getAllClasses({}).subscribe(
      (response) => {
        this.ClassData = response;
      },
      (error) => {
        console.error('Error Getall Classes:', error);
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
        console.error('Error Getall Stages:', error);
      }
    );
  }





}
