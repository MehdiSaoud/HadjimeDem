import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/*** INTERFACE ***/
import { QuestionBase } from '@app/shared/services/question/interface/question-base';
import { QuestionControlService } from '@app/shared/services/question/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup = new FormGroup({});
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
