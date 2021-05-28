import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '@app/shared/services/question/interface/question-base';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.scss']
})
export class InputSwitchComponent implements OnInit {
  @Input() question!: QuestionBase<string> ;
  @Input() form!: FormGroup;
  @Output() updatedSwitchRelated = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  switchChange($event:any){
    this.updatedSwitchRelated.emit({checked: $event.checked,relatedTo: this.question.relatedTo[0]})
  }

}
