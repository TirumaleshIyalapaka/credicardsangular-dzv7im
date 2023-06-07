import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  constructor() {}

  ngOnInit() {
    const data: any = localStorage.getItem('currentUser');
    const currentuserdata = JSON.parse(data);
    this.user = {
      name: currentuserdata.name,
      address: currentuserdata.address,
      pno: currentuserdata.pno,
      mail: currentuserdata.email,
      uid: currentuserdata.uid,
      accno: currentuserdata.accno,
    };
  }
}
