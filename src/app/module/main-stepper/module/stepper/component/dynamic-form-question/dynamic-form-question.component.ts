import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '@app/shared/services/question/interface/question-base';
import { StepInterface } from '../../../../../../shared/services/step/interface/step';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<string> = new QuestionBase;
  @Input() questions: QuestionBase<string>[] = [];
  @Input() form: FormGroup = new FormGroup({});



  
  constructor() { }

  ngOnInit(): void {
 
  }

  updateRelatedFromSwitch($event:any){
    console.log($event,this.questions);

    for (let i = 0; i < this.questions.length; i++) {
      const question = this.questions[i];

      if(question.id === $event.relatedTo && $event.checked ){
        question.disabled = false
      } else if (question.id === $event.relatedTo && !$event.checked){
        question.disabled = true
      } else {
        
      }
      
    }
    
  }

  get isValid() { return this.form.controls[this.question.key].valid; }

}
