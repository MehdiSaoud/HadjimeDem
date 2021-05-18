import { NgModule } from '@angular/core';
import { StepperComponent } from './stepper.component';
import { SharedModule } from '../../../../shared/shared.module';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './component/dynamic-form-question/dynamic-form-question.component';
import { InputTextComponent } from './component/input-text/input-text.component';
import { InputDropdownComponent } from './component/input-dropdown/input-dropdown.component';
import { InputTextareaComponent } from './component/input-textarea/input-textarea.component';

@NgModule({
  declarations: [
    StepperComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    InputTextComponent, 
    InputDropdownComponent, 
    InputTextareaComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ StepperComponent ]
})
export class StepperModule { }
