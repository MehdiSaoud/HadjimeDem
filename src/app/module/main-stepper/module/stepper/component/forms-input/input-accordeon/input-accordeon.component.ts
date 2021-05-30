import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '@app/shared/services/question/interface/question-base';

@Component({
  selector: 'app-input-accordeon',
  templateUrl: './input-accordeon.component.html',
  styleUrls: ['./input-accordeon.component.scss']
})
export class InputAccordeonComponent implements OnInit {
  
  @Input() question!: QuestionBase<string> ;
  @Input() form: FormGroup = new FormGroup({});
  expandedState: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  changeExpandedPanel(index:number){
    this.expandedState = index
  }

}
