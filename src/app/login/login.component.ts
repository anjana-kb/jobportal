import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  // loading = false;
  // submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    //  private loginService: LoginService,
    // private alertService: AlertService
  ) {
    this.loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {

    // this.loginService.logout();
  }
  get f() {
    return this.loginform.controls;
  }

 login() {
    var username = this.f['username'].value;
    var password = this.f['password'].value;
    // this.submitted = true;

    // // reset alerts on submit
    // // this.alertService.clear();

    // this.loading = true;

    if (username.toLowerCase() == 'anjana' && password == 'Anjana') {
      console.log('Login Success',username);
      // this.loading = false;
      // this.loginService.login(username);
      // this.alertService.success('Success');
      const returnUrl = '/jobs';
      this.router.navigateByUrl(returnUrl);
    } else {
      console.log('Failed');
      // this.loading = false;
      // this.alertService.error('Incorrect Username or Password');
    }
  }
}
