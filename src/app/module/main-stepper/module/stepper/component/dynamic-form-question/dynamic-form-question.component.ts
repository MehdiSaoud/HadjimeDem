import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '@app/shared/services/question/interface/question-base';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question!: QuestionBase<string> ;
  @Input() form!: FormGroup;

  
  constructor() { }

  ngOnInit(): void {
    console.log(this.question);
    
  }

  get isValid() { return this.form.controls[this.question.key].valid; }

}
