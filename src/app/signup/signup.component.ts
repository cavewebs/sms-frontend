import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../api.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup = {
    firstname: '',
    lastname: '',
    email:'',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    honeyPot: '',
  }
  isLoading = false;
  errors = false;
  errorMsg:any;
  constructor(
    private apiService: ApiService,
    private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  register(){
    this.errorMsg = undefined;
    if (this.signup.honeyPot != ''){
      console.log('stay there na');
    } else {
    if(this.signup.firstname == '' || this.signup.lastname == '' || this.signup.email == '' || this.signup.phoneNumber == '' || this.signup.password == '' || this.signup.confirmPassword == ''){
     return  this.errorMsg = 'Please fill all fields';
    } else {
      this.isLoading = true;
      this.apiService.register(this.signup).subscribe((data: any)=>{
        this.isLoading = false;
        if(data)
        {
          if (data.status){
            this.router.navigateByUrl('/verify')

        } else {
          this.errorMsg = data.message;
        }  
      }
      else {
        this.errorMsg = "Could not process request, check internet connection";

      }
        console.log(data);
      })  
    }
  }

  }

}
