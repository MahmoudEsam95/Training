import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-AddGrade',
  templateUrl: './AddGrade.component.html',
  styleUrls: ['./AddGrade.component.css']
})
export class AddGradeComponent implements OnInit {

  GradeData:any = {};
  StageData:any = {};
  lastId: number = 0;
  SubjectsData:any = {};
  GradeSubjectsData:any = {};

  // SubjectByIdData:any = {};



  constructor(private myService:MyServiceService,private router: Router, private route: ActivatedRoute) { }



  Mygroub = new FormGroup({
    id: new FormControl(NaN,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    stageId: new FormControl(null,[Validators.required]),

  });
  Mygroub1 = new FormGroup({
    id: new FormControl(NaN,[Validators.required]),
    subjectId: new FormControl(null,[Validators.required]),
    gradeId: new FormControl(null,[Validators.required]),

  });

  ngOnInit() {
    this.getLastId();
    this.getLastIdGradeSubject();
    this.getAllStages();
    this.getAllGrades();
    this.getAllSubjects();
    this.getAllGradeSubjects();

  }




  getLastId(): void {
    this.myService.getlastIdGrade().subscribe(
      (lastId: number) => {
        this.lastId = lastId;
        this.Mygroub.patchValue({
          id: this.lastId != null ? this.lastId + 1 : null,
        });
      },
      (error) => {
        console.error('Error getting last ID:', error);
      }
    );
  }


  AddGrade(data:any): void {
    this.myService.createGrade(this.Mygroub.value).subscribe(
      (response : any) => {
      this.getAllGrades();
      },
      (error : any) => {
        console.error( error);
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
    getAllSubjects() {
      this.myService.getAllSubject({}).subscribe(
        (response) => {
        this.SubjectsData = response;
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
      console.log(this.GradeData);

      },
      (error) => {
        console.error('Error Getall grades:', error);
      }
    );
  }




  AddGradeSubject(data:any): void {
    this.myService.createGradeSubject(this.Mygroub1.value).subscribe(
      (response : any) => {

        this.getAllGradeSubjects();
        this.getLastIdGradeSubject();

      },
      (error : any) => {
        console.error( error);
      }
    );
  }

  getLastIdGradeSubject(): void {
    this.myService.getlastIdGradeSubject().subscribe(
      (lastId: number) => {
        this.lastId = lastId;
        this.Mygroub1.patchValue({
          id: this.lastId != null ? this.lastId + 1 : null,
        });
      },
      (error) => {
        console.error('Error getting last ID:', error);
      }
    );
  }

  getAllGradeSubjects() {
    this.myService.getAllGradeSubject({}).subscribe(
      (response) => {
      this.GradeSubjectsData = response;
      },
      (error) => {
        console.error('Error Getall Stages:', error);
      }
    );
  }

  deleteGradeSubject(id: any) {
    this.myService.deleteGradeSubjectById(id).subscribe(
      (response) => {
        console.log('GradeSubject deleted successfully:', response);
        this.getAllGrades();
        this.getAllGradeSubjects();


      },
      (error) => {
        console.error('GradeSubject deleting Class:', error);
      }
    );
  }


}
