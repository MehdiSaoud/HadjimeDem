import { Component, Input, OnInit } from '@angular/core';
import { StepInterface } from '../../shared/services/stepper-steps/interface/step'

@Component({
  selector: 'app-main-stepper',
  templateUrl: './main-stepper.component.html',
  styleUrls: ['./main-stepper.component.scss']
})
export class MainStepperComponent implements OnInit {

  @Input() steps: StepInterface<string>[] = [];
  isEditable = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.steps);
  }

}
