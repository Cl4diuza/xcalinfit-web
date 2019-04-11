import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log(this.registerForm);
  }

  private initForm() {
    this.registerForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      name: new FormControl(null),
      password: new FormControl(null, Validators.required),
      rePassword: new FormControl(null, Validators.required)
    });
  }
}
