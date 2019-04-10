import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  calProgessBar: any = '10%';
  proteinProgessBar: any = '50%';
  carbProgessBar: any = '80%';
  constructor() {}

  ngOnInit() {}
}
