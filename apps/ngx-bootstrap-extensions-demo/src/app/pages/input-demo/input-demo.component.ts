import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'ngx-bootstrap-extensions-input-demo',
  templateUrl: './input-demo.component.html',
  styleUrls: ['./input-demo.component.scss']
})
export class InputDemoComponent implements OnInit {
  form1Model = {
    input1: 'Input 1',
    bseInput1: 'Input 1',
    numberInput1: 1,
    bseNumberInput1: 1
  };

  form2: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form2 = this.fb.group({
      bseInput1: 'test2',
      bseInput2: 'test2',
      numberInput2: 1,
      bseNumberInput2: 1
    });
  }

}
