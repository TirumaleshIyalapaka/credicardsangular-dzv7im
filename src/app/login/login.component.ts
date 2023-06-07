import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: boolean = false;

  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  get username() {
    return this.loginform.get('username')!.value;
  }

  get password() {
    return this.loginform.get('password')!.value;
  }

  constructor(private route: Router) {}

  ngOnInit() {}

  submit() {
    console.log(this.username, this.password);
    const data: any = localStorage.getItem('Users');
    const userData = JSON.parse(data);
    console.log(userData);

    let currentUser = userData.find((user: any) => {
      console.log(user.username, user.password);
      return user.username === this.username && user.password === this.password;
    });

    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.route.navigate(['/dashboard']);
    } else {
      this.errorMessage = true;
    }
  }
}
