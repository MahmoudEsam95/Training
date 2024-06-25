import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';



@Component({
  selector: 'app-ListDegree',
  templateUrl: './ListDegree.component.html',
  styleUrls: ['./ListDegree.component.css']
})
export class ListDegreeComponent implements OnInit {


  DegreeData:any = {};
  GradeData: any = {};
  ClassData: any = {};
  StageData: any = {};
  SubjectData: any = {};

  lastId: number = 0;
  SubjectsData:any = {};
  SubjectByIdData:any = {};
  StudentData:any={};
  searchTerm: string = '';

  get filteredItems() {
    if (this.searchTerm) {
      return this.DegreeData.filter((student: { studentId: number }) =>
        student.studentId === parseInt(this.searchTerm)
      );
    }
    return this.DegreeData;
  }

  constructor(private myService: MyServiceService, private router: Router) {}

  Mygroub = new FormGroup({
    ID: new FormControl(NaN, [Validators.required]),
    SubjectID: new FormControl(null, [Validators.required]),
    StudentID: new FormControl(null, [Validators.required]),
    degree1: new FormControl(null, [Validators.required]),

  });

  ngOnInit() {

  this.getAllDegree();
  this.getAllStudent();
  this.getAllSubject();
  this. getLastDegreeId();

  }

  AddDegree(data: any): void {
    this.myService.createDegree(this.Mygroub.value).subscribe(
      (response: any) => {
        this.getAllDegree();
      },
      (error: any) => {
        // console.error(error);
        alert("this degree was added before");
      }
    );
  }

  getLastDegreeId(): void {
    this.myService.getlastIdDegree().subscribe(
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

  getAllDegree() {
    this.myService.getAllDegree({}).subscribe(
      (data: any) => {
        this.DegreeData = data;
        console.log(this.DegreeData);
      },
      (error: any) => {
        console.error('Error fetching Classes:', error);
      }
    );
  }

  deleteDegree(id: any) {
    this.myService.deleteDegreeById(id).subscribe(
      (response) => {
        console.log('Degree deleted successfully:', response);
        this.getAllDegree();

      },
      (error) => {
        console.error('Error deleting Degree:', error);
      }
    );
  }


  getAllSubject() {
    this.myService.getAllSubject({}).subscribe(
      (data: any) => {
        this.SubjectData = data;
        console.log(this.DegreeData);
      },
      (error: any) => {
        console.error('Error fetching Subject:', error);
      }
    );
  }


  getAllStudent() {
    this.myService.getAllStudents({}).subscribe(
      (data: any) => {
        this.StudentData = data;
        console.log(this.StudentData);
      },
      (error: any) => {
        console.error('Error fetching Student:', error);
      }
    );
  }



}
