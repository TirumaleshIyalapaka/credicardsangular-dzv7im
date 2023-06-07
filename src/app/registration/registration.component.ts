import { Component, OnInit } from '@angular/core';
// import { Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  FormControlName,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  title = 'User Registration Form';

  Users: any[] = [];
  data: Object = {};

  match: any[] = [];
  semimatch: any[] = [];

  registerForm = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    education: new FormControl(''),
    dob: new FormControl(''),
    password: new FormControl(''),
  });

  userData: any;

  get name() {
    return this.registerForm.get('name')!.value;
  }

  get gender() {
    return this.registerForm.get('gender')!.value;
  }

  get age() {
    return this.registerForm.get('age')!.value;
  }

  get education() {
    return this.registerForm.get('education')!.value;
  }

  get dob() {
    return this.registerForm.get('dob')!.value;
  }
  get password() {
    return this.registerForm.get('password')!.value;
  }

  submit() {
    const data = this.registerForm.value;
    // console.log(this.registerForm.value);
    let agecode;
    if (Number(this.age) <= 15) {
      agecode = 'AC';
    } else if (Number(this.age) > 15 && Number(this.age) <= 30) {
      agecode = 'AT';
    } else if (Number(this.age) > 30 && Number(this.age) <= 55) {
      agecode = 'AM';
    } else if (Number(this.age) > 55) {
      agecode = 'AS';
    }

    let educode;
    if (this.education == 'School') {
      educode = 'ES';
    } else if (this.education == 'College') {
      educode = 'EC';
    } else if (this.education == 'Graduation') {
      educode = 'EG';
    } else if (this.education == 'Post Graduation') {
      educode = 'EP';
    } else if (this.education == 'Masters') {
      educode = 'EM';
    } else if (this.education == 'None') {
      educode = 'EN';
    }

    let gendercode;
    if (this.gender == 'Male') {
      gendercode = 'M';
    } else {
      gendercode = 'F';
    }

    // console.log(gendercode);

    const date = data.dob;

    const year = date!.slice(0, 4);
    const month = date!.slice(5, 7);
    const day = date!.slice(8);

    // console.log(day, month, year);
    // console.log(educode);
    // console.log(agecode);
    let uid = gendercode + agecode + educode + '_' + day + month + year;
    // console.log(uid);

    const userdata = {
      name: this.name,
      password: this.password,
      gender: this.gender,
      gendercode: gendercode,
      age: this.age,
      education: this.education,
      dob: this.dob,
      agecode: agecode,
      educode: educode,
      uid: uid,
    };
    // this.Users.push(userdata);

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
    // filter for semi match data
    this.semimatch = this.Users.filter((userr) => {
      return (
        userr.uid.slice(1, 5) === userdata.uid.slice(1, 5) &&
        userr.uid.slice(0, 1) != userdata.uid.slice(0, 1)
      );
    });
    console.log(this.semimatch, ' semi match Users');

    // filter for full match data
    this.match = this.Users.filter((userr) => {
      return (
        userr.uid.slice(1) === userdata.uid.slice(1) &&
        userr.uid.slice(0, 1) != userdata.uid.slice(0, 1)
      );
    });
    console.log(this.match, 'full match users');

    this.Users.push(userdata);

    //console.log(this.Users, ' is the Users');
    // this.Users.push(userData);
    console.log(this.Users);
    localStorage.setItem('Users', JSON.stringify(this.Users));

    // console.log(this.Users);

    // this.userData.push(userData);
    // window.localStorage.setItem('Users', JSON.stringify(this.Users));

    // window.localStorage.setItem('Users', JSON.stringify());

    // let userData = localStorage.getItem('Users');

    // window.localStorage.setItem(
    //   'Users',
    //   JSON.stringify(this.registerForm.value)
    // );
  }
  ngOnInit() {
    const usersData = localStorage.getItem('Users');
    this.Users = usersData ? JSON.parse(usersData) : [];
  }
}
