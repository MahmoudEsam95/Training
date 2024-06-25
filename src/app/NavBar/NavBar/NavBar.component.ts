import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router,public authService: AuthService) { }
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
  ngOnInit() {
  }

}
