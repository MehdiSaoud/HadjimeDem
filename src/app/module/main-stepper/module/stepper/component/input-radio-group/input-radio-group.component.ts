import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '@app/shared/services/question/interface/question-base';

@Component({
  selector: 'app-input-radio-group',
  templateUrl: './input-radio-group.component.html',
  styleUrls: ['./input-radio-group.component.scss']
})
export class InputRadioGroupComponent implements OnInit {

  @Input() question:any;
  @Input() form!: FormGroup;
  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.question);
    this.initOptions()
    console.log(this.form);
  }

  onChange($event:any,option:any){
    if(option.checked === false){
      option.checked = true;
      this.question.options.forEach((otherOption:any) => {
        if(otherOption !== option){
          otherOption.checked = false;
        }
      });
    } 
    console.log(this.form);
    
  }

  /**
   * Init options with check attr
   */
  initOptions(){
    this.question.options.forEach((option:any) => {
      option.checked  = false;
    });
  }
}
