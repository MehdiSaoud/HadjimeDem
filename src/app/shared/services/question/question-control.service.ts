import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from './interface/question-base';

@Injectable({ providedIn: 'root'})
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};
    console.log(questions)

    questions.forEach(question => {

      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    console.log(group)
    return new FormGroup(group);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/