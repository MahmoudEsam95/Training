import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';
import { SseService } from 'src/app/Service/sse.service';

@Component({
  selector: 'app-AddStudent',
  templateUrl: './AddStudent.component.html',
  styleUrls: ['./AddStudent.component.css'],
})
export class AddStudentComponent implements OnInit {
  GradeData: any = {};
  StageData: any = {};
  StudentData: any = {};
  ClassData: any = {};
  lastId: number = 0;
  getAllGradesbyStageIdData: any = [];
  getAllClassesbyStageIdData: any = [];
  c: any = {};
  e: any = {};

  onStageChange(e: Event) {
    this.c = (e.target as HTMLInputElement).value;
    this.getAllGradesbyStageId(this.c);
  }

  onGradeChange(e: Event) {
    this.e = (e.target as HTMLInputElement).value;
    this.getAllClassessbyGradeId(this.e);
  }

  constructor(
    private myService: MyServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private notificationService: SseService
  ) {}

  Mygroup = new FormGroup({
    id: new FormControl(NaN, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    stageId: new FormControl(null, [Validators.required]),
    gradeId: new FormControl(null, [Validators.required]),
    classesId: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    this.getAllStudents();
    this.getAllClasses();
    this.getAllGrades();
    this.getAllStages();
    this.getLastId();
    // this.AddStudent(this.Mygroup.value);
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

  getAllClassessbyGradeId(id: number) {
    this.myService.getAllClassesbyGradeId(id).subscribe(
      (data) => {
        console.log(data);
        this.getAllClassesbyStageIdData = data;
      },
      (err) => {
        console.error('Error getting elements:', err);
      }
    );
  }

  getLastId() {
    this.myService.getlastIdStudent().subscribe(
      (lastId: number) => {
        this.lastId = lastId;
        this.Mygroup.patchValue({
          id: this.lastId != null ? this.lastId + 1 : null,
        });
      },
      (error) => {
        console.error('Error getting last ID:', error);
      }
    );
  }

  AddStudent(data: any): void {
    this.myService.createStudent(this.Mygroup.value).subscribe(
      (response: any) => {
        this.getAllStudents();
        console.log(response);
        // this.notificationService.showNotification('Student added successfully!');
        this.router.navigate(['/listStudent']);

      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getAllStudents() {
    this.myService.getAllStudents({}).subscribe(
      (response) => {
        this.StudentData = response;
      },
      (error) => {
        console.error('Error Getall Student:', error);
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





}
