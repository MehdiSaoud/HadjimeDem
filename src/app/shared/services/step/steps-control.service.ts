import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { boolean } from 'joi';
import { StepInterface } from './interface/step';

@Injectable({ providedIn: 'root'})
export class StepperControlService {
  constructor() { }

  toFormGroup(steps: StepInterface<string>[] ) {
    const group: any = {};
    steps.forEach(step => {
      group[step.id] = new FormGroup({
        // stepsValid: new FormControl(null, [Validators.required]),
      })
    });
    return new FormGroup(group);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/