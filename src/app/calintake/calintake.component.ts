import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calintake',
  templateUrl: './calintake.component.html',
  styleUrls: ['./calintake.component.css']
})
export class CalintakeComponent implements OnInit {
  calForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log(this.calForm);
  }
  private initForm() {
    this.calForm = new FormGroup({
      goal: new FormControl(),
      sex: new FormControl(),
      weight: new FormControl(),
      height: new FormControl(),
      age: new FormControl(),
      exercise: new FormControl()
    });
  }
}
