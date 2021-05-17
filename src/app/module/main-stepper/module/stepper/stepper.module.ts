import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    SharedModule,
    SharedModule
  ],
  exports: [ StepperComponent ]
})
export class StepperModule { }
