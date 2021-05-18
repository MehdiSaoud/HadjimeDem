import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/*** INTERFACE ***/
import { QuestionBase } from '@app/shared/services/question/interface/question-base';

/*** SERVICE ***/
import { QuestionService } from '@app/shared/services/question/question.service';
import { QuestionControlService } from '@app/shared/services/question/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit {

  questions$: QuestionBase<string>[] = [];
  @Input() stepId: number | undefined;
  form: FormGroup = new FormGroup({});
  payLoad = '';
  questions = [];
  dataLoad = false;

  constructor(private qcs: QuestionControlService, private questionService: QuestionService) {}

  ngOnInit(): void {

    this.questions$ = this.questionService.getQuestions('step' + this.stepId).subscribe((result:any) =>{
   
      this.form = this.qcs.toFormGroup(result);
      this.questions = result;

      console.log(this.questions);
      this.dataLoad = true;
      
    })
  
   
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
