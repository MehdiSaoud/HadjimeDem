import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/*** INTERFACE ***/
import { QuestionBase } from '@app/shared/services/question/interface/question-base';

/*** SERVICE ***/
import { QuestionService } from '@app/shared/services/question/question.service';
import { QuestionControlService } from '@app/shared/services/question/question-control.service';
import { StepInterface } from '../../../../../../shared/services/step/interface/step';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {

  
  @Input() step: StepInterface<string> = new StepInterface;
  @Input() mainForm: FormGroup = new FormGroup({});
  questions$: QuestionBase<string>[] = [];
  form: FormGroup = new FormGroup({});
  payLoad = '';
  questions = [];
  dataLoad = false;

  constructor(private qcs: QuestionControlService, private questionService: QuestionService) {}

  ngOnInit(): void {
    // Get questions for related step
    this.questions$ = this.questionService.getQuestions('step' + this.step.id).subscribe((result:any) =>{
      // Create form group for questions
      this.form = this.qcs.toFormGroup(result);
      // To fix
      this.questions = result; 
      // Add the questions's FormGroup to nested steps related by id     
      this.mainForm.controls[this.step.parentStep]['controls'][this.step.id] = this.form
    })   
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());   
  }

}
