import { Component, Input, OnInit } from '@angular/core';
import { StepInterface } from '../../shared/services/step/interface/step';
import { StepperControlService } from '../../shared/services/step/steps-control.service'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-stepper',
  templateUrl: './main-stepper.component.html',
  styleUrls: ['./main-stepper.component.scss']
})
export class MainStepperComponent implements OnInit {

  @Input() steps: StepInterface<string>[] = [];
  form: FormGroup = new FormGroup({})
  constructor(private scs: StepperControlService) {
 
  }

  ngOnInit(): void {
    this.form = this.scs.toFormGroup(this.steps)
  
    console.log('form.get(step.id)',this.form.controls[this.steps[0].id]);
    
    
  }

}
