import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

/*** INTERFACE ***/
import { StepInterface } from "@app/shared/services/step/interface/step";
import { QuestionBase } from "@app/shared/services/question/interface/question-base";

/*** SERVICE ***/
import { StepperControlService } from "@app/shared/services/step/steps-control.service";
import { MatStep, MatStepper } from "@angular/material/stepper";
import { CdkStepper } from "@angular/cdk/stepper";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {

  @ViewChild("cdkStepper") cdkStepper!: CdkStepper;
  @Input() steps: StepInterface<string>[] = [];
  @Input() mainForm: FormGroup = new FormGroup({});
  @Input() parentStepTitle: StepInterface<string> | undefined;
  @Output() onStepsValid = new EventEmitter();
  form: FormGroup = new FormGroup({});


  constructor(private scs: StepperControlService) {}

  ngOnInit(): void {
    // Init FormGroup for each steps
    this.form = this.scs.toFormGroup(this.steps);
    // Set Steps Form Group to the main-stepper
    this.mainForm.controls[this.steps[0].parentStep] = this.form;
    // Add control for nestedFormGroup
    let nestedFormGroup = this.mainForm.controls[
      this.steps[0].parentStep
    ] as FormGroup;
    nestedFormGroup.addControl(
      "stepsValid",
      new FormControl("", Validators.required)
    );
  }

  /**
   * Move to next step
   * If last step Emit event to change main-stepper step
   */
  nextStep(step: FormGroup) {
    let index = this.cdkStepper.selectedIndex
    index++
    if (step.valid) {
      this.cdkStepper.next();
      if(this.isStepperValid() && index === this.cdkStepper.steps.length){
        this.onStepsValid.emit('next')
      }
    } else {
      this.markFormGroupTouched(step);
    }
  }

  /**
   * Move to previous step
   * If last step Emit event to change main-stepper step
   */
  previousStep(step: FormGroup) {
    let index = this.cdkStepper.selectedIndex
      
      this.cdkStepper.previous();
      if( index === 0 ){
        this.onStepsValid.emit('previous')
      }
  } 

  isStepperValid() {
    console.log(this.form);
    console.log("ouwoo");
    console.log(this.cdkStepper);

    let validCount = 0;
    let valid;
    this.steps.forEach((step) => {
      this.mainForm.controls[step.parentStep];
      let formGroup1 = this.mainForm.controls[step.parentStep] as FormGroup;
      let formGroup2 = formGroup1.controls[step.id] as FormGroup;
      if (formGroup2.valid) {
        validCount++;
      }
      if (validCount === this.steps.length) {
        formGroup1.get("stepsValid")?.setValue(true);
        valid =  true
      } else {
        formGroup1.get("stepsValid")?.setValue(false);
        valid = false
      }
    });

    return valid;
  }

  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control:any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
