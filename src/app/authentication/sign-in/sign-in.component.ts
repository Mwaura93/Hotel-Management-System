import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;
  loginFailed: boolean = false;
  loading: boolean = false;
  error: string = '';

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  // Access form controls
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    // Reset error states
    this.loginFailed = false;
    this.loading = true;
    this.error = '';

    // Just log the form values for now
    if (this.loginForm.valid) {
      console.log('Login form submitted', this.loginForm.value);
      this.loginFailed = false;
      this.loading = false;
    } else {
      this.loginFailed = true;
      this.loading = false;
      this.error = 'Username and Password are required!';
    }
  }
}
