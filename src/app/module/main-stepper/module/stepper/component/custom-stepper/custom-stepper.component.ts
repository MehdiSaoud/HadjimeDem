import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit, Input } from '@angular/core';
import { StepInterface } from '@app/shared/services/step/interface/step';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }]
})
export class CustomStepperComponent extends CdkStepper implements OnInit {

  @Input() parentStepTitle: StepInterface<string> | undefined;

  ngOnInit(): void {
  }

  onClick(index: number): void {
    this.selectedIndex = index;
  }

}
