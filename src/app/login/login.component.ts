import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  errors = false;
  errorMsg:any;
  login = {
    email: '',
    password: '',
  }
  constructor(
    private apiService: ApiService,
    private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  loginUser(){
    this.errorMsg = undefined;
    if(this.login.email == '' || this.login.password == '' ){
     return  this.errorMsg = 'Please fill all fields';
    } else {
      this.isLoading = true;
      this.apiService.login(this.login).subscribe((data: any)=>{
        this.isLoading = false;
        if(data)
        {
          if (data.status){
            localStorage.setItem('vantToken', data.token);
            console.log('VA', data.data);
            localStorage.setItem('vantUser', JSON.stringify(data.data));
            this.router.navigateByUrl('/dashboard')
        } else {
          this.errorMsg = data.message;
        }  
      }
      else {
        this.errorMsg = "Could not process request, check internet connection";
        this.isLoading = false;
      }
        this.errorMsg = data;
        this.isLoading = false;

      })  
    }
  }

  

}
