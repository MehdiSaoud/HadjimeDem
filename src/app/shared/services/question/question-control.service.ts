import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from './interface/question-base';

@Injectable({ providedIn: 'root'})
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      if(question.controlType === 'switch'){
        group[question.key] = new FormControl(false, Validators.required)
      } else if(question.controlType === 'textbox' && question.type === 'email'){
       
          group[question.key] = new FormControl('', [Validators.required,Validators.email])
      } else {
        group[question.key] = !question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
      }
      
    });
  
    return new FormGroup(group);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/