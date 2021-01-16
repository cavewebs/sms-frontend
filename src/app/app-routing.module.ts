import { LogicalProjectPath } from '@angular/compiler-cli/src/ngtsc/file_system';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { SignupComponent } from './signup/signup.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UploadkycComponent } from './uploadkyc/uploadkyc.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  { path: '',
component: HomeComponent},

{ path: 'home',
component: HomeComponent},

{ path: 'admin',
component: AdminComponent},

{ path: 'login',
component: LoginComponent},

{ path: 'navbar',
component: NavbarComponent},

{ path: 'profile',
component: ProfileComponent},

{ path: 'signup',
component: SignupComponent},

{ path: 'uploadkyc',
component: UploadkycComponent},

{ path: 'forgot-password',
component: ForgotPasswordComponent},

{ path: 'verification',
component: VerificationComponent},

{ path: 'transaction',
component: TransactionComponent},

{ path: 'setting',
component: SettingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
