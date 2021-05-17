import { Component, Input, OnInit } from '@angular/core';
import { StepInterface } from '@app/shared/services/stepper-steps/interface/step';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() steps: StepInterface<string>[] = [];
  constructor() { }

  ngOnInit(): void {
    
    
  }

}
