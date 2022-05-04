import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  passwordIsValid : boolean;
  registerForm: FormGroup;
  passwordType:  boolean;
  showText: boolean;
  startedType: boolean = true;
  date_value: any;
  
  constructor( 
    private fb: FormBuilder,
    private router: Router
  ) { 
  
  }

  ngOnInit(): void {
          // Form For create
     this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.email]],
      phone: ['', [Validators.required]],
      name: new FormControl('', [
        Validators.required, 
        Validators.pattern(/^[A-z0-9]*$/),
        Validators.minLength(3)
      ]),
      password: ['', [Validators.required]]
    })
  }
  // Get functions for all input fields
  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get password() {
    return this.registerForm.get('password');
  }
  // Function to chnage password from secret to plain text
  showPassword() {
    this.passwordType = !this.passwordType;
    this.showText = !this.showText;
  }
  passwordValid(event: any) {
    this.passwordIsValid = event;
  }
  onBlur() {
    this.startedType = true;
  }
  onFocus() {
    this.startedType = false;
  }
  // set date
  submitdate(item: any) {
    // date value
     this.date_value = item;
  }
}
