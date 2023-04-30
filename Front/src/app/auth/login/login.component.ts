import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/authService';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  token: any;
  decodedData:any;
  id: any;
  error = '';
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;
    this.authService.login(email, password).subscribe(
      (data) => {
        // console.log(data);
        this.token = data.token;
        this.decodedData = this.jwtHelper.decodeToken(this.token);

        // console.log(this.decodedData);
        // console.log(this.token);

        if (this.token) {
          sessionStorage.setItem('token', this.token);
          sessionStorage.setItem('userId', JSON.stringify(this.decodedData.id));
          sessionStorage.setItem('role', JSON.stringify(this.decodedData.role));
          switch(this.decodedData.role){
            case 'Employee':
              this.router.navigate(['/employee']);
              break;
            case 'Doctor':
              this.router.navigate(['/doctor/Profile']);
              break;
            case 'Patient':
              this.router.navigate(['/patient']);
              break;
            case 'Admin':
              this.router.navigate(['/admin']);
              break;
            default:
              this.router.navigate(['/home']);
              break;
          }
        }
      },
      (error) => {
        this.error = error;
        // alert(JSON.stringify(error));
      }
    );
  }
}
