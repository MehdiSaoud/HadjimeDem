import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Component */
import { MainStepperComponent } from './main-stepper.component';

/* Module */
import { StepperModule } from './module/stepper/stepper.module';
import { SharedModule } from '../../shared/shared.module';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@NgModule({
  declarations: [ MainStepperComponent],
  imports: [
    SharedModule,
    StepperModule
  ],
  exports: [ MainStepperComponent ],

  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class MainStepperModule { }
