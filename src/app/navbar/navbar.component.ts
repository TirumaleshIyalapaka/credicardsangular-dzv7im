import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  loggedUser: any;
  ngOnInit() {
    const data: any = localStorage.getItem('currentUser');
    this.loggedUser = JSON.parse(data);
    // console.log(loggedUser.name + ' NavBar');
  }
}
