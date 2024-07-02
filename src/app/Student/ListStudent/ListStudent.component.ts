import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-ListStudent',
  templateUrl: './ListStudent.component.html',
  styleUrls: ['./ListStudent.component.css']
})
export class ListStudentComponent implements OnInit {

  @ViewChild('content') content!: ElementRef;

  StudentData:any ={};


  searchTerm: string = '';
  searchTerm1: string = '';

  get filteredItems() {
    if (this.searchTerm && !this.searchTerm1) {
      return this.StudentData.filter((student: { name: string }) =>
        student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else if (this.searchTerm1 && !this.searchTerm) {
      return this.StudentData.filter((student: { id: number }) =>
        student.id === parseInt(this.searchTerm1)
      );
    } else {
      return this.StudentData;
    }
  }

  exportToPDF() {
    const doc = new jsPDF();


    html2canvas(this.content.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = 300;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add captured image to PDF
      doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      doc.save('student-details.pdf');
    });
  }

  downloadPdf(id: number): void {
    this.myService.getStudentPdf(id).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Student_${id}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }




  constructor(private myService: MyServiceService, private router: Router) {}


  ngOnInit() {
    this.getAllStudent();
  }




  getAllStudent() {
    this.myService.getAllStudents({}).subscribe(
      (data: any) => {
        this.StudentData = data;
        console.log(this.StudentData);
      },
      (error: any) => {
        console.error('Error fetching Students:', error);
      }
    );
  }
  deleteStudent(id: any) {
    this.myService.deleteStudentById(id).subscribe(
      (response) => {
        console.log('Student deleted successfully:', response);
        this.getAllStudent();

      },
      (error) => {
        console.error('Error deleting Student:', error);
      }
    );
  }





}
