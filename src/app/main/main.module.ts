import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './register/password-strength/password-strength.component';

@NgModule({
  declarations: [
    RegisterComponent,
    PasswordStrengthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
  ],
  providers: [
  ]
})
export class MainModule { }
