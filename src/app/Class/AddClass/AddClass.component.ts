import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-AddClass',
  templateUrl: './AddClass.component.html',
  styleUrls: ['./AddClass.component.css'],
})
export class AddClassComponent implements OnInit {
  GradeData: any = {};
  ClassData: any = {};
  StageData: any = {};
  lastId: number = 0;
  SubjectsData:any = {};
  SubjectByIdData:any = {};

  c: any = {};
  getAllGradesbyStageIdData: any = [];

  onStageChange(e: Event) {
    this.c = (e.target as HTMLInputElement).value;
    this.getAllGradesbyStageId(this.c);
  }

  constructor(
    private myService: MyServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  Mygroub = new FormGroup({
    ID: new FormControl(NaN, [Validators.required]),
    Name: new FormControl(null, [Validators.required]),
    GradeId: new FormControl(null, [Validators.required]),
  });

  Mygroub1 = new FormGroup({
    id: new FormControl(NaN, [Validators.required]),
    subjectId: new FormControl(null, [Validators.required]),
    classId: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    this.getAllGrades();
    this.getLastId();
    this.getAllStages();
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

  getLastId(): void {
    this.myService.getlastIdClass().subscribe(
      (lastId: number) => {
        this.lastId = lastId;
        this.Mygroub.patchValue({
          ID: this.lastId != null ? this.lastId + 1 : null,
        });
      },
      (error) => {
        console.error('Error getting last ID:', error);
      }
    );
  }

  AddClass(data: any): void {
    this.myService.createClass(this.Mygroub.value).subscribe(
      (response: any) => {
        this.getAllClasses();
      },
      (error: any) => {
        console.error(error);
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







}
