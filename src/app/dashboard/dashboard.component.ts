import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
user:any;
isLoading = false
showApiKeys = false;
settingsActive = "";
aboutActive = "active";
showInfo = true;
  constructor() { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem('vantUser'));
    console.log(this.user);
  }

  showApiSettings(){
    this.showApiKeys = true;
    this.aboutActive = '';
    this.settingsActive = "active";
  }
  showAbout(){
    this.showApiKeys = false;
    this.aboutActive = 'active';
    this.settingsActive = "";
  }

}
