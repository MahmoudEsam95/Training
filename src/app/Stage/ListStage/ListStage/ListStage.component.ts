import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-ListStage',
  templateUrl: './ListStage.component.html',
  styleUrls: ['./ListStage.component.css']
})
export class ListStageComponent implements OnInit {

  StageData:any ={};

  constructor(private myService: MyServiceService, private router: Router) {}


  ngOnInit() {
    this.getAllStage();
  }


  getAllStage() {
    this.myService.getAllStages({}).subscribe(
      (data: any) => {
        this.StageData = data;
        console.log(this.StageData);
      },
      (error: any) => {
        console.error('Error fetching Grades:', error);
      }
    );
  }
  deleteStage(id: any) {
    this.myService.deleteStageById(id).subscribe(
      (response) => {
        console.log('Stage deleted successfully:', response);
        this.getAllStage();

      },
      (error) => {
        console.error('Error deleting Stage:', error);
      }
    );
  }




}
