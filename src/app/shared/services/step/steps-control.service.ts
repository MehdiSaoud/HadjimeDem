import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepInterface } from './interface/step';

@Injectable({ providedIn: 'root'})
export class StepperControlService {
  constructor() { }

  toFormGroup(steps: StepInterface<string>[] ) {
    const group: any = {};
    steps.forEach(step => {
      group[step.id] = new FormGroup({})
    });
    return new FormGroup(group);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/