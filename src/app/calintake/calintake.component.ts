import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calintake',
  templateUrl: './calintake.component.html',
  styleUrls: ['./calintake.component.css']
})
export class CalintakeComponent implements OnInit {
  calForm: FormGroup;
  totalCal: any;
  proteinIntake: any;
  carbIntake: any;
  fatIntake: any;
  proteinCal: any;
  fatCal: any;
  carbCal: any;
  bmr: any;
  goalCal: any;

  isCalculated: any = false;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  onCalculate() {
    const goal = this.calForm.controls.goal.value;
    const sex = this.calForm.controls.sex.value;
    const weight = this.calForm.controls.weight.value;
    const height = this.calForm.controls.height.value;
    const age = this.calForm.controls.age.value;
    const exercise = this.calForm.controls.exercise.value;

    this.calculateBmr(sex, weight, height, age);
    this.totalCal = exercise * this.bmr;
    this.calculateGoalCal(this.totalCal, goal);
    this.calculateNutrient();
    this.isCalculated = true;
    window.scrollTo(0, 0);
  }

  calculateBmr(sex, weight, height, age) {
    if (sex === 'male') {
      this.bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else {
      this.bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }
  }

  calculateGoalCal(totalCal, goal) {
    if (goal === 'diet') {
      this.goalCal = totalCal * 0.8;
    } else if (goal === 'stable') {
      this.goalCal = totalCal;
    } else {
      this.goalCal = totalCal * 1.2;
    }
  }

  calculateNutrient() {
    this.carbCal = this.goalCal * 0.4;
    this.proteinCal = this.goalCal * 0.3;
    this.fatCal = this.goalCal * 0.3;

    this.carbIntake = this.carbCal / 4;
    this.proteinIntake = this.proteinCal / 4;
    this.fatIntake = this.fatCal / 9;
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
