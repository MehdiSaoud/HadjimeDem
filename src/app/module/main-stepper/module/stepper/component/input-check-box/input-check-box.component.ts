import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '@app/shared/services/question/interface/question-base';

@Component({
  selector: 'app-input-check-box',
  templateUrl: './input-check-box.component.html',
  styleUrls: ['./input-check-box.component.scss']
})
export class InputCheckBoxComponent implements OnInit {

  @Input() question!: QuestionBase<string> ;
  @Input() form!: FormGroup;
  isChecked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  onChange($event:any){
    console.log($event);

    this.isChecked = $event.checked
    console.log(this.isChecked);

 }

}
