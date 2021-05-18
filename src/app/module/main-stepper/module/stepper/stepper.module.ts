import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { SharedModule } from '../../../../shared/shared.module';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './component/dynamic-form-question/dynamic-form-question.component';



@NgModule({
  declarations: [
    StepperComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    SharedModule,
    SharedModule
  ],
  exports: [ StepperComponent ]
})
export class StepperModule { }
