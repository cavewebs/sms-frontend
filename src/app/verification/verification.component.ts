import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  errorMsg: string;
  otp = {
    code: ''
  };
  isLoading: boolean;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  verify(){
    this.errorMsg = undefined;
    if(this.otp.code == '' ){
     return  this.errorMsg = 'Please enter verification code';
    } else {
      this.isLoading = true;
      this.apiService.verify(this.otp).subscribe((data: any)=>{
        this.isLoading = false;
        if(data)
        {
          if (data.status){
            this.router.navigateByUrl('/profile');
        } else {
          this.errorMsg = data.message;
        }  
      }
      else {
        this.isLoading = false;
        this.errorMsg = "Could not process request, check internet connection";
      }
        console.log(data);
      })  
    }
  }

}
