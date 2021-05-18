import { Injectable } from '@angular/core';

import { StepInterface } from './interface/step';

import { of } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class StepsService {

  /**
   * Init Parent & Children steps
   * @returns all steps
   */
  getSteps() {
      const parentSteps: StepInterface<string>[] = [
        new StepInterface({
          id: 1,
          title: 'Départ',
          steps$: this.getChildrenSteps('step'+ 1),
          order: 1
        }),
        new StepInterface({
          id: 2,
          title: 'Arrivé',
          steps$: this.getChildrenSteps('step'+ 2),
          order: 2
        }),
        // new StepInterface({
        //   id: 3,
        //   title: 'Déménagement',
        //   steps$: this.getChildrenSteps('step'+ 3),
        //   order: 3
        // }),
        // new StepInterface({
        //   id: 4,
        //   title: 'Devis',
        //   steps$: this.getChildrenSteps('step'+ 4),
        //   order: 4
        // }),  
      ];
      return of(parentSteps.sort((a, b) => a.order - b.order)); 
  }

  /**
   * @param parentStep Parent identifier 
   * @returns Children steps related to parent identifier
   */
  getChildrenSteps(parentStep: string){
    const childrenSteps = {
      step1: () => {
        const steps: StepInterface<string>[] = [
          new StepInterface({
            id: 5,
            title: 'Type d"habitation au départ',
            order: 1
          }),
          new StepInterface({
            id: 6,
            title: 'Saisissez votre adresse de départ',
            order: 2
          }),
          new StepInterface({
            id: 7,
            title: 'Accès',
            order: 3
          }),
           new StepInterface({
            id: 8,
            title: 'Testdimeh',
            order: 4
          }),
          
        ];
        return of(steps.sort((a, b) => a.order - b.order));
      },
      step2: () => {
        const steps: StepInterface<string>[] = [
          new StepInterface({
            id: 8,
            title: 'Arrivé 1/3',
            order: 1
          }),
          new StepInterface({
            id: 9,
            title: 'Arrivé 2/3',
            order: 2
          }),
          new StepInterface({
            id: 10,
            title: 'Arrivé 3/3',
            order: 3
          }),
        ];
        return of(steps.sort((a, b) => a.order - b.order));
      },
      step3: () => {
        const steps: StepInterface<string>[] = [
          new StepInterface({
            id: 11,
            title: 'Déménagement 1/3',
            order: 1
          }),
          new StepInterface({
            id: 12,
            title: 'Déménagement 2/3',
            order: 2
          }),
          new StepInterface({
            id: 13,
            title: 'Déménagement 3/3',
            order: 3
          }),
        ];
        return of(steps.sort((a, b) => a.order - b.order));
      },
      step4: () => {
        const steps: StepInterface<string>[] = [
          new StepInterface({
            id: 14,
            title: 'Devis 1/3',
            order: 1
          }),
          new StepInterface({
            id: 15,
            title: 'Devis 2/3',
            order: 2
          }),
          new StepInterface({
            id: 16,
            title: 'Devis 3/3',
            order: 3
          }),
        ];
        return of(steps.sort((a, b) => a.order - b.order));
      },
      default: () => {
        return false;
      },
    };
    return (childrenSteps[parentStep] || childrenSteps['default'])();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/