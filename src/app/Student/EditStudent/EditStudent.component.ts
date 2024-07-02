import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-EditStudent',
  templateUrl: './EditStudent.component.html',
  styleUrls: ['./EditStudent.component.css'],
})
export class EditStudentComponent implements OnInit {

  ClassData: any = {};
  GradeData: any = {};
  StageData: any = {};
  ClassByIdData: any = {};
  StageByIdData: any = {};
  StudentByIdData: any = {};
  StudentId: number = 0;
  DegreeDataByID:any=[];
  DegreesDataByID:any=[];
  DegreeData:any = {};
  SubjectData: any = {};
  lastId: number = 0;
  SubjectsData:any = {};
  SubjectByIdData:any = {};
  StudentData:any={};

  getAllGradesbyStageIdData: any = [];
  getAllClassesbyStageIdData: any = [];
  c: any = {};
  e: any = {};

  onStageChange(e: Event) {
    this.c = (e.target as HTMLInputElement).value;
    this.getAllGradesbyStageId(this.c);
    this.StudentByIdData.classesId = null;
  }

  onGradeChange(e: Event) {
    this.e = (e.target as HTMLInputElement).value;
    this.getAllClassessbyGradeId(this.e);
  }
  Mygroub = new FormGroup({
    ID: new FormControl(NaN, [Validators.required]),
    SubjectID: new FormControl(null, [Validators.required]),
    StudentID: new FormControl(this.StudentId),
    degree1: new FormControl(null, [Validators.required]),
  });

 
  constructor(
    private myService: MyServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.StudentId = Number(this.route.snapshot.params['id']);
    this.getStudentByID(this.StudentId);
    this.getDegreesByStudentId(this.StudentId);


  }

  ngOnInit(): void {
    this.getAllClasses();
    this.getAllGrades();
    this.getAllStages();
    this.getLastDegreeId();
    this.getAllSubject();
    this.getAllStudents();
    this.getDegreesByStudentId(this.StudentId);


  }

  getLastDegreeId(): void {
    this.myService.getlastIdDegree().subscribe(
      (lastId: number) => {
        this.lastId = lastId;
        this.Mygroub.patchValue({
          ID: this.lastId != null ? this.lastId + 1 : null,
        });
        this.Mygroub.patchValue({StudentID: this.StudentId!==null ? this.StudentId: null});
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

  AddDegree(data: any): void {
    this.myService.createDegree(this.Mygroub.value).subscribe(
      (response: any) => {
        this.getDegreesByStudentId(this.StudentId);
        this.getLastDegreeId();
      },
      (error: any) => {
        // console.error(error);
        alert("this degree was added before");
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

  deleteDegree(id: any) {
    this.myService.deleteDegreeById(id).subscribe(
      (response) => {
        console.log('Degree deleted successfully:', response);
        this.getDegreesByStudentId(this.StudentId);
         window.location.reload();

      },
      (error) => {
        console.error('Error deleting Degree:', error);
      }
    );
  }

  getDegreesByStudentId(id: number) {
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

  getStudentByID(id: number) {
    this.myService.getStudentById(id).subscribe(
      (response) => {
        console.log(response);
        this.StudentByIdData = response;
        this.getAllGradesbyStageId(this.StudentByIdData.stageId);
        this.getAllClassessbyGradeId(this.StudentByIdData.gradeId);

      },
      (error) => {
        console.error('Error getting element:', error);
      }
    );
  }

  EditStudent(id: number, data: any) {
    this.myService.editStudent(id, this.StudentByIdData).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/listStudent']);
      },
      (err) => {
        console.log('error edit Student', err);
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
        console.error('Error Getall Grades:', error);
      }
    );
  }
  getAllStudents() {
    this.myService.getAllStudents({}).subscribe(
      (response) => {
        this.StudentData = response;
      },
      (error) => {
        console.error('Error Getall Students:', error);
      }
    );
  }
}
