import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Component */
import { MainStepperComponent } from './main-stepper.component';

/* Module */
import { StepperModule } from './module/stepper/stepper.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ MainStepperComponent],
  imports: [
    SharedModule,
    StepperModule
  ],
  exports: [ MainStepperComponent ]
})
export class MainStepperModule { }
