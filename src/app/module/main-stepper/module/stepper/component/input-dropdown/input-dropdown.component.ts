import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '@app/shared/services/question/interface/question-base';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss']
})

export class InputDropdownComponent implements OnInit {
  @Input() question!: QuestionBase<string> ;
  @Input() form!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    
  }

}
