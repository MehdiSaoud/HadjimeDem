import { NgModule } from '@angular/core';
import { StepperComponent } from './stepper.component';
import { SharedModule } from '../../../../shared/shared.module';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './component/dynamic-form-question/dynamic-form-question.component';
import { InputTextComponent } from './component/forms-input/input-text/input-text.component';
import { InputDropdownComponent } from './component/forms-input/input-dropdown/input-dropdown.component';
import { InputTextareaComponent } from './component/forms-input/input-textarea/input-textarea.component';
import { InputSwitchComponent } from './component/forms-input/input-switch/input-switch.component';
import { CustomStepperComponent } from './component/custom-stepper/custom-stepper.component';
import { InputRadioGroupComponent } from './component/forms-input/input-radio-group/input-radio-group.component';
import { SummaryStepComponent } from './component/summary-step/summary-step.component';
import { InputDatepickerComponent } from './component/forms-input/input-datepicker/input-datepicker.component';
import { InputAccordeonComponent } from './component/forms-input/input-accordeon/input-accordeon.component';


@NgModule({
  declarations: [
    StepperComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    InputTextComponent,
    InputDropdownComponent, 
    InputTextareaComponent,
    InputSwitchComponent,
    CustomStepperComponent,
    InputRadioGroupComponent,
    SummaryStepComponent,
    InputDatepickerComponent,
    InputAccordeonComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ StepperComponent ]
})
export class StepperModule { }
