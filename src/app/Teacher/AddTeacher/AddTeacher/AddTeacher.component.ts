import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';


@Component({
  selector: 'app-AddTeacher',
  templateUrl: './AddTeacher.component.html',
  styleUrls: ['./AddTeacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  ClassSubjectData:any = {};
  GradeData: any = {};
  StageData: any = {};
  TeacherData: any = {};
  SubjectData: any = {};
  ClassData: any = {};
  lastId: number = 0;
  getAllGradesbyStageIdData: any = [];
  getAllClassesbyStageIdData: any = [];

  constructor(
    private myService: MyServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  Mygroup = new FormGroup({
    id: new FormControl(NaN, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),

  });

  Mygroup1 = new FormGroup({
    id: new FormControl(NaN, [Validators.required]),
    teacherId: new FormControl(NaN, [Validators.required]),
    subjectId: new FormControl(null, [Validators.required]),
    classId: new FormControl(null, [Validators.required]),

  });
  ngOnInit() {
    this.getLastTeacherId();
    this. getlastIdClassSubject();
    this.getAllSubject();
    this.getAllClass();
    this.getAllClassSubject();
    this.getAllTeacher();


  }


  getLastTeacherId() {
    this.myService.getlastIdTeacher().subscribe(
      (lastId: number) => {
        this.lastId = lastId;
        this.Mygroup.patchValue({
          id: this.lastId != null ? this.lastId + 1 : null,
        });
        this.Mygroup1.patchValue({
          teacherId: this.lastId != null ? this.lastId + 1 : null,
        });
      },
      (error) => {
        console.error('Error getting last ID:', error);
      }
    );
  }


  getlastIdClassSubject() {
    this.myService.getlastIdClassSubject().subscribe(
      (lastId: number) => {
        this.lastId = lastId;
        this.Mygroup1.patchValue({
          id: this.lastId != null ? this.lastId + 1 : null,
        });

      },
      (error) => {
        console.error('Error getting last ID:', error);
      }
    );
  }
  getAllTeacher() {
    this.myService.getAllTeacher({}).subscribe(
      (response) => {
        this.TeacherData = response;
      },
      (error) => {
        console.error('Error Getall Student:', error);
      }
    );
  }


  AddTeacher(data: any): void {
    this.myService.createTeacher(this.Mygroup.value).subscribe(
      (response: any) => {
        this.getAllTeacher();
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  getAllSubject() {
    this.myService.getAllSubject({}).subscribe(
      (response) => {
        this.SubjectData = response;
      },
      (error) => {
        console.error('Error Getall Subject:', error);
      }
    );
  }





  getAllClass() {
    this.myService.getAllClasses({}).subscribe(
      (response) => {
        this.ClassData = response;
      },
      (error) => {
        console.error('Error Getall Subject:', error);
      }
    );
  }

  getAllClassSubject() {
    this.myService.getAllClassSubject({}).subscribe(
      (response) => {
        this.ClassSubjectData = response;
        console.log(this.ClassSubjectData);
      },
      (error) => {
        console.error('Error Getall Subject:', error);
      }
    );
  }


  deleteClassSubject(id: any) {
    this.myService.deleteClassSubjectById(id).subscribe(
      (response) => {
        console.log('ClassSubject deleted successfully:', response);
        this.getAllClassSubject();
      },
      (error) => {
        console.error('Error deleting Student:', error);
      }
    );
  }





  AddClassSubject(data: any): void {
    this.myService.createClassSubject(this.Mygroup1.value).subscribe(
      (response: any) => {
        // window.location.reload();
        this.getlastIdClassSubject();
        this.getAllClassSubject();

        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }






}
