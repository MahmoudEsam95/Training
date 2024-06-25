import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from 'src/app/Service/my-service.service';
@Component({
  selector: 'app-AddStage',
  templateUrl: './AddStage.component.html',
  styleUrls: ['./AddStage.component.css']
})
export class AddStageComponent implements OnInit {
  lastId: number = 0;
  StageData:any = {};
  id: number = 0;

  constructor(private myService:MyServiceService,private router: Router, private route: ActivatedRoute) { }


  ngOnInit():void {
    this.getLastId();
  }


  Mygroub = new FormGroup({
    id: new FormControl(NaN,[Validators.required]),
    name: new FormControl(null,[Validators.required]),

  });


  getLastId(): void {
    this.myService.getlastIdStage().subscribe(
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


  AddStage(): void {
    this.myService.createStage(this.Mygroub.value).subscribe(
      (response : any) => {
        console.log(response);
      // this.getAllStages();
      },
      (error : any) => {
        console.error( error);
      }
    );
  }




  getAllStages() {
    this.myService.getAllStages(this.StageData).subscribe(
      (data: any) => {
        this.StageData = data;
        console.log(this.StageData);
      },
      (error: any) => {
        console.error('Error fetching Stage:', error);
      }
    );
  }


}
