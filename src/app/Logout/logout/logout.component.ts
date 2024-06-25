import { Component ,OnInit} from '@angular/core';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private myser: MyServiceService) { }


  ngOnInit() {
this.logout();
  }

  logout(): void {
    this.myser.logout();
  }
}
