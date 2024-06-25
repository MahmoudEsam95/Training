import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';


@Component({
  selector: 'app-EditStage',
  templateUrl: './EditStage.component.html',
  styleUrls: ['./EditStage.component.css']
})
export class EditStageComponent implements OnInit {
  ClassData:any = {};
  GradeData:any = {};
  ClassByIdData:any = {};
  StageByIdData:any = {};
  StageId:number=0;


  constructor(private myService:MyServiceService,private router: Router, private route: ActivatedRoute) {

    this.StageId = Number(this.route.snapshot.params['id']);
    this.getStageByID(this.StageId);

  }

  ngOnInit() : void {

  }


  getStageByID(id: number) {
    this.myService.getStageById(id).subscribe(
      (response) => {
        console.log(response);
        this.StageByIdData = response;
      },
      (error) => {
        console.error('Error getting element:', error);
      }
    );
  }




  EditStage(id:number,data:any) {
    this.myService.editStage(id,this.StageByIdData).subscribe((data) =>
      {
        console.log(data);
        this.router.navigate(['/listStage']);
      },
    (err) => {
      console.log('error edit Stage', err );
    }
    );
    }













}
