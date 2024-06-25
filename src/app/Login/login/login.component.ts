import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/Service/my-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private myser: MyServiceService,private router:Router,private authService: AuthService) { }

  onSubmit(): void {
    localStorage.setItem('login', JSON.stringify(this.username));
    this.myser.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful');

        this.router.navigate(['/chart']);

      },
      error => {
        console.error('Login error:', error);
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}








