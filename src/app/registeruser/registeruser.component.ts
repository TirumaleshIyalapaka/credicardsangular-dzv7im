import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  FormControlName,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
})
export class RegisteruserComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit() {
    const usersData = localStorage.getItem('Users');
    this.Users = usersData ? JSON.parse(usersData) : [];
  }
  title = 'User Registration Form';

  Users: any[] = [];
  data: Object = {};

  match: any[] = [];
  semimatch: any[] = [];

  registerationForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    pno: new FormControl(''),
    address: new FormControl(''),
  });

  userData: any;

  get name() {
    return this.registerationForm.get('name')!.value;
  }

  get username() {
    return this.registerationForm.get('username')!.value;
  }

  get email() {
    return this.registerationForm.get('email')!.value;
  }

  get pno() {
    return this.registerationForm.get('pno')!.value;
  }

  get address() {
    return this.registerationForm.get('address')!.value;
  }
  get password() {
    return this.registerationForm.get('password')!.value;
  }

  get dateTime(): any {
    let timeStamp = new Date();
    let date: any = timeStamp.getDate();
    let month: any = timeStamp.getMonth();
    let year: any = timeStamp.getFullYear();
    let hours: any = timeStamp.getHours();
    let minutes: any = timeStamp.getMinutes();
    let seconds: any = timeStamp.getSeconds();

    if (Number(date) < 10) {
      date = 0 + String(date);
    }
    if (Number(month) < 10) {
      month = '0' + month;
    }
    if (Number(hours) < 10) {
      hours = '0' + hours;
    }
    if (Number(minutes) < 10) {
      minutes = '0' + minutes;
    }
    if (Number(seconds) < 10) {
      seconds = '0' + seconds;
    }
    return year + month + date + hours + minutes + seconds;
  }

  submit() {
    const data = this.registerationForm.value;
    // console.log(this.registerationForm.value);

    const userdata = {
      name: this.name,
      password: this.password,
      username: this.username,
      email: this.email,
      pno: this.pno,
      address: this.address,
      accno: this.dateTime,
    };
    // this.Users.push(userdata);
    console.log(userdata);
    console.log(this.Users);

    // const userData = localStorage.getItem('Users');
    // this.Users = userData ? JSON.parse(userData) : [];
    // this.Users.push(userdata);
    // console.log(this.Users, ' is the pushed Users');
    // localStorage.setItem('Users', JSON.stringify(this.Users));

    const userData = localStorage.getItem('Users');
    // console.log(userData);
    // console.log(userdata);
    // console.log(userData, ' is this.Users data');
    this.Users = userData ? JSON.parse(userData) : [];

    this.Users.push(userdata);

    //console.log(this.Users, ' is the Users');
    // this.Users.push(userData);
    console.log(this.Users);
    localStorage.setItem('Users', JSON.stringify(this.Users));
    this.route.navigate(['/login']);
  }
}
