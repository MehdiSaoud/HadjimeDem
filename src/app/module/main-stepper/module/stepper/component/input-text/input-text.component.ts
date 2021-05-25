import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../../../../../../shared/services/question/interface/question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() question!: QuestionBase<string> ;
  @Input() form!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
