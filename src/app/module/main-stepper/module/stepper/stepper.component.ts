import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    console.log('CHILDREN STEPS FORM GROUP',this.form);
    console.log('MAIN FORM BEFORE CHILDREN INIT',this.form);
    console.log(this.steps[0].parentStep);
    
    this.mainForm.controls[this.steps[0].parentStep] = this.form
    console.log('MAIN FORM AFTER CHILDREN INIT',this.form);

    // Generate Form for each step
    // this.steps.forEach(step => {
    //   console.log(step);
    // });
    // console.log(this.mainForm);
  }

  isValid(){
    console.log(this.mainForm.controls[this.steps[0].parentStep].valid)
    console.log(this.mainForm.controls[this.steps[0].parentStep].valid)
    let validStep = 0;
    this.steps.forEach(step => {
      
      if(this.mainForm.controls[this.steps[0].parentStep]['controls'][step.id].valid){
        validStep += 1;
        this.mainForm.controls[this.steps[0].parentStep]['controls'][step.id].get('stepValid').setValue(true)
      } 
    });
    console.log(validStep);
    
    if(validStep === this.steps.length){
      console.log(this.mainForm);
      
      console.log(this.mainForm.controls[this.steps[0].parentStep]['controls'].get('stepValid').setValue(true));
      
      // this.mainForm.controls[this.steps[0].parentStep]['controls'].get('stepsValid').setValue(true)
    }
  }

}
