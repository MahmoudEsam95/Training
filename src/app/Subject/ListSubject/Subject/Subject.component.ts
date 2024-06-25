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
  selector: 'app-Subject',
  templateUrl: './Subject.component.html',
  styleUrls: ['./Subject.component.css']
})
export class SubjectComponent implements OnInit {
  ClassSubjectData:any = {};
  GradeData: any = {};
  StageData: any = {};
  TeacherData: any = {};
  SubjectData: any = {};
  ClassData: any = {};
  lastId: number = 0;

  Mygroup = new FormGroup({
    id: new FormControl(NaN, [Validators.required]),
    name: new FormControl(null, [Validators.required]),

  });
  constructor(
    private myService: MyServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getLastTeacherId();
    this.getAllSubject();
  }





  getLastTeacherId() {
    this.myService.getlastIdSubject().subscribe(
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
  AddSubject(data: any): void {
    this.myService.createSubject(this.Mygroup.value).subscribe(
      (response: any) => {
        this.getAllSubject();
        this.getLastTeacherId();
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


  deleteSubject(id: any) {
    this.myService.deleteSubjectById(id).subscribe(
      (response) => {
        console.log('Subject deleted successfully:', response);
        this.getAllSubject();
      },
      (error) => {
        console.error('Error deleting Student:', error);
      }
    );
  }






}
