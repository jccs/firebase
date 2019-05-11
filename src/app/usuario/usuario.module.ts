import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppMaterialModule} from './../app-material/app-material.module';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, PasswordRecoveryComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    RouterModule,
    UsuarioRoutingModule
  ],
  exports: [
    LoginComponent, SignupComponent
  ],
  entryComponents: [
    SignupComponent, PasswordRecoveryComponent
  ]
})
export class UsuarioModule { }
