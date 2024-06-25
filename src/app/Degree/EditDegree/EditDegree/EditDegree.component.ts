import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-EditDegree',
  templateUrl: './EditDegree.component.html',
  styleUrls: ['./EditDegree.component.css']
})
export class EditDegreeComponent implements OnInit {

  ClassData: any = {};
  ClassByIdData: any = {};
  DegreeByIdData: any = {};

  SubjectData: any[] = [];
  getAllGradesbyStageIdData: any = [];
  StudentData: any[] = [];
  DegreesDataByID:any = [];
  DegreeId: number = 0;


  constructor(
    private myService: MyServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private location:Location
  ) {}

  ngOnInit() {
    this.DegreeId = Number(this.route.snapshot.params['id']);
    this.getDegreeByID(this.DegreeId);
    this.getAllSubject();
    this.getAllStudent();

  }
  goBack(): void {
  this.location.back();
  }
  EditDegree(id: number, data: any) {
    this.myService.editDegree(id,this.DegreeByIdData).subscribe(
      (data) => {
        console.log(data);
    this.getDegreeByID(this.DegreeId);
      },
      (err) => {
        console.log('error edit Degree', err);
      }
    );
  }

  getDegreeByID(id: number) {
    this.myService.getDegreeById(id).subscribe(
      (response) => {
        console.log(response);
        this.DegreeByIdData = response;
        this.getAllDegreesByStudentId(this.DegreeByIdData.studentId);
      },

      (error) => {
        console.error('Error getting element:', error);
      }
    );
  }

  getAllStudent() {
    this.myService.getAllStudents({}).subscribe(
      (data) => {
        console.log(data);
        this.StudentData = data;
      },
      (err) => {
        console.error('Error getting elements:', err);
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

  getAllDegreesByStudentId(id: number) {
    this.myService.getDegreesByStudentId(id).subscribe(
      (data) => {
        console.log(data);
        this.DegreesDataByID = data;
      },
      (err) => {
        console.error('Error getting elements:', err);
      }
    );
  }
}
