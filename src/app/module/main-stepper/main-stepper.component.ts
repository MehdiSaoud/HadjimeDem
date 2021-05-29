import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { StepInterface } from "../../shared/services/step/interface/step";
import { StepperControlService } from "../../shared/services/step/steps-control.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";

@Component({
  selector: "app-main-stepper",
  templateUrl: "./main-stepper.component.html",
  styleUrls: ["./main-stepper.component.scss"],
})
export class MainStepperComponent implements OnInit {
  @ViewChild("mainStepper") mainStepper!: MatStepper;
  @Input() steps: StepInterface<string>[] = [];
  form: FormGroup = new FormGroup({});
  constructor(private scs: StepperControlService) {}

  ngOnInit(): void {
    this.form = this.scs.toFormGroup(this.steps);
  }

  /**
   * @param $event Event from stepper.component when nesteds steps are completed
   */
  changeStep(dir: any) {
    if(dir === 'next'){
      this.mainStepper.next();
    } else {
      this.mainStepper.previous();
    }
  }

  // /**
  //  * Move to next step
  //  * If last step Emit event to change main-stepper step
  //  */
  // nextStep(step: FormGroup) {
  //   let index = this.cdkStepper.selectedIndex;
  //   index++;
  //   if (step.valid) {
  //     this.cdkStepper.next();
  //     if (this.isStepperValid() && index === this.cdkStepper.steps.length) {
  //       this.onStepsValid.emit("next");
  //     }
  //   } else {
  //     this.markFormGroupTouched(step);
  //   }
  // }

  // /**
  //  * Move to previous step
  //  * If last step Emit event to change main-stepper step
  //  */
  // previousStep(step: FormGroup) {
  //   let index = this.cdkStepper.selectedIndex;

  //   if (step.valid) {
  //     this.cdkStepper.previous();
  //     if (this.isStepperValid() && index === 0) {
  //       this.onStepsValid.emit("previous");
  //     }
  //   } else {
  //     this.markFormGroupTouched(step);
  //   }
  // }
}
