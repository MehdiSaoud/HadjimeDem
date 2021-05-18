import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

/*** INTERFACE ***/
import { StepInterface } from '@app/shared/services/step/interface/step';
import { QuestionBase } from '@app/shared/services/question/interface/question-base';

/*** SERVICE ***/
import { StepperControlService } from '@app/shared/services/step/steps-control.service';
import { QuestionService } from '@app/shared/services/question/question.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() steps: StepInterface<string>[] = [];
  @Input() mainForm: FormGroup = new FormGroup({});
  form: FormGroup = new FormGroup({});
  questions$: Observable<QuestionBase<any>[]>;

  constructor(private scs: StepperControlService,questionService: QuestionService) { 
    this.questions$ = questionService.getQuestions();
  }

  ngOnInit(): void {
    // Init Steps FormGroup & set to the mainForm
    this.form = this.scs.toFormGroup(this.steps) 
    this.mainForm.controls[this.steps[0].id] = this.form

    // Generate Form for each step
    this.steps.forEach(step => {
      console.log(step);
    });
    console.log(this.mainForm);
  }

}
