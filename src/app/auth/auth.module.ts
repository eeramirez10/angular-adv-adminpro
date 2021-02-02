import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

let components = [
  LoginComponent,
  RegisterComponent,
]

@NgModule({
  declarations: [components],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  exports: [components]
})
export class AuthModule { }
