import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-EditTeacher',
  templateUrl: './EditTeacher.component.html',
  styleUrls: ['./EditTeacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  ClassData: any = {};
  TeacherData: any = {};
  ClassSubjectDataByTeacherId:any = {};
  GradeData: any = {};
  StageData: any = {};
  ClassByIdData: any = {};
  StageByIdData: any = {};
  TeacherByIdData: any = {};
  TeacherId: number = 0;
  getAllGradesbyStageIdData: any = [];
  getAllClassesbyStageIdData: any = [];
  ClassSubjectData:any = {};
  SubjectData: any = {};
  lastId: number = 0;

  Mygroup1 = new FormGroup({
    id: new FormControl(NaN, [Validators.required]),
    teacherId: new FormControl(NaN, [Validators.required]),
    subjectId: new FormControl(null, [Validators.required]),
    classId: new FormControl(null, [Validators.required]),

  });

  constructor(
    private myService: MyServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.TeacherId = Number(this.route.snapshot.params['id']);
    this.getTeacherByID(this.TeacherId);
  }

  ngOnInit() {
    this.getAllTeacher();
    this.getClassSubjectByTeacherID(this.TeacherId);
    this.getAllSubject();
    this.getAllTeacher();
    this.getAllClass();
    this.getlastIdClassSubject();
  }


  deleteClassSubject(id: any) {
    this.myService.deleteClassSubjectById(id).subscribe(
      (response) => {
        console.log('ClassSubject deleted successfully:', response);
        this.getClassSubjectByTeacherID(this.TeacherId);

      },
      (error) => {
        console.error('Error deleting Student:', error);
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



  getlastIdClassSubject() {
    this.myService.getlastIdClassSubject().subscribe(
      (lastId: number) => {
        this.lastId = lastId;
        this.Mygroup1.patchValue({
          id: this.lastId != null ? this.lastId + 1 : null,
        });
        this.Mygroup1.patchValue({
          teacherId:this.TeacherId != null ? this.TeacherId : null,
        });
      },
      (error) => {
        console.error('Error getting last ID:', error);
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


  AddClassSubject(data: any): void {
    this.myService.createClassSubject(this.Mygroup1.value).subscribe(
      (response: any) => {
        // window.location.reload();
        this.getlastIdClassSubject();
        this.getClassSubjectByTeacherID(this.TeacherId);
    // this.getAllClassSubject();

        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  getAllTeacher() {
    this.myService.getAllTeacher({}).subscribe(
      (response) => {
        this.TeacherData = response;
      },
      (error) => {
        console.error('Error Getall Teacher:', error);
      }
    );
  }

  getTeacherByID(id: number) {
    this.myService.getTeacherById(id).subscribe(
      (response) => {
        console.log(response);
        this.TeacherByIdData = response;

      },
      (error) => {
        console.error('Error getting element:', error);
      }
    );
  }
  getClassSubjectByTeacherID(id: number) {
    this.myService.GetClassSubjectByTeacherId(id).subscribe(
      (response) => {
        console.log(response);
        this.ClassSubjectDataByTeacherId = response;

      },
      () => {
        console.log('Error getting element:');
      }
    );
  }



  EditTeacher(id: number, data: any) {
    this.myService.editTeacher(id, this.TeacherByIdData).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/listTeacher']);
      },
      (err) => {
        console.log('error edit Teacher', err);
      }
    );
  }









}
