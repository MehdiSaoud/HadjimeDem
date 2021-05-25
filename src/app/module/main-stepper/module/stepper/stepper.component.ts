import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

/*** INTERFACE ***/
import { StepInterface } from '@app/shared/services/step/interface/step';
import { QuestionBase } from '@app/shared/services/question/interface/question-base';

/*** SERVICE ***/
import { StepperControlService } from '@app/shared/services/step/steps-control.service';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() steps: StepInterface<string>[] = [];
  @Input() mainForm: FormGroup = new FormGroup({});
  form: FormGroup = new FormGroup({});

  constructor(private scs: StepperControlService) {
  
  }

  ngOnInit(): void {
    // Init Steps FormGroup & set to the mainForm
    this.form = this.scs.toFormGroup(this.steps) 
    this.mainForm.controls[this.steps[0].parentStep] = this.form
    let nestedFormGroup = this.mainForm.controls[this.steps[0].parentStep] as FormGroup 
    nestedFormGroup.addControl('stepsValid', new FormControl('', Validators.required))
  }

  isValid(){
    let validCount = 0;
    this.steps.forEach(step => {
      this.mainForm.controls[step.parentStep]
      let formGroup1  = this.mainForm.controls[step.parentStep] as FormGroup
      let formGroup2  = formGroup1.controls[step.id] as FormGroup
      if(formGroup2.valid){
        validCount++
      } else {        
      }
      if(validCount === this.steps.length){
        formGroup1.get('stepsValid')?.setValue(true)        
      }
    });
  }

}
