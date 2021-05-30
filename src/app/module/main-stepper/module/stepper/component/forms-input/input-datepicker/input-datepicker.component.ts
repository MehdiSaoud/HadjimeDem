import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '@app/shared/services/question/interface/question-base';


@Component({
  selector: 'app-input-datepicker',
  templateUrl: './input-datepicker.component.html',
  styleUrls: ['./input-datepicker.component.scss'],
})
export class InputDatepickerComponent implements OnInit {
  @Input() question!: QuestionBase<string> ;
  @Input() form: FormGroup = new FormGroup({});
  startControl: string = '';
  endControl: string = '';
  constructor() { }


  ngOnInit(): void {
    this.form.removeControl('date');
    this.form.addControl(
      "start",
      new FormControl('', Validators.required)
    );
    this.form.addControl(
      "end",
      new FormControl('', Validators.required)
    );
    this.startControl = 'start'
    this.endControl = 'end'
  }

}
