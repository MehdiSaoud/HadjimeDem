import { Injectable } from '@angular/core';
import { of } from 'rxjs';

/*** INTERFACE ***/
import { DropdownQuestion } from './interface/question-dropdown';
import { QuestionBase } from './interface/question-base';
import { TextboxQuestion } from './interface/question-textbox';
import { SwitchQuestion } from './interface/question-switch';


@Injectable({ providedIn: 'root'})
export class QuestionService {

  
  getQuestions(stepId: string) {

    const childrenStepsQuestion = {
      // STEP : DÉPART
      step5: () => {
        const questions: QuestionBase<string>[] = [

          new DropdownQuestion({
            key: 'brave',
            label: 'Bravery Rating',
            options: [
              {key: 'solid',  value: 'Solid'},
              {key: 'great',  value: 'Great'},
              {key: 'good',   value: 'Good'},
              {key: 'unproven', value: 'Unproven'}
            ],
            order: 3
          }),
          

        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step6: () => {
        const questions: QuestionBase<string>[] = [    
          new TextboxQuestion({
            key: 'adress',
            label: '',
            value: '',
            required: true,
            order: 1
          }),
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step7: () => {
        const questions: QuestionBase<string>[] = [    
          new TextboxQuestion({
            id: 1,
            key: 'adress',
            label: '',
            value: '',
            required: true,
            order: 1
          }),
          new DropdownQuestion({
            id: 2,
            key: 'appartment-access',
            label: 'Etage',
            options: [
              {key: 'rdc',  value: 'rdc'},
              {key: '1',  value: '1er étage'},
              {key: '2',  value: '2e étage'},
              {key: '3',  value: '3e étage'},
              {key: '4',  value: '4e étage'},
              {key: '5',  value: '5e étage'},
              {key: '6',  value: '6e étage'},
              {key: '7',  value: '7e étage'},
              {key: '8',  value: '8e étage'},
              {key: '9',  value: '9e étage'},
              {key: '10 +',  value: '10e étage et +'},
            ],
            order: 2
          }),
          new DropdownQuestion({
            id: 3,
            key: 'appartment-access',
            label: 'Etage',
            options: [
              {key: 'rdc',  value: 'La maison est de plain pied'},
              {key: '1',  value: 'La maison est sur 1 étage'},
              {key: '2',  value: 'La maison est sur 2 étages'},
              {key: '3',  value: 'La maison est sur 3 étages'},
            ],
            order: 1
          }),
          new SwitchQuestion({
            id: 4,
            key: 'elevator',
            label: 'Disposez-vous d’un ascenseur ?',
            value: '',
            relatedTo:[5],
            required: true,
            order: 2
          }),
          new DropdownQuestion({
            id: 3,
            key: 'elevator-access',
            label: 'Vos meubles rentrent-ils dans l’ascenceur ?',
            options: [
              {key: '1',  value: 'Oui'},
              {key: '2',  value: 'Non'},
              {key: '3',  value: 'En grande partie'},
            ],
            order: 3
          }),
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      // // STEP : ARRIVÉ
      // step8: () => {
      //   const steps: StepInterface<string>[] = [
      //     new StepInterface({
      //       id: 1,
      //       title: 'Devis 1/3',
      //       order: 1
      //     }),
      //     new StepInterface({
      //       id: 2,
      //       title: 'Devis 2/3',
      //       order: 2
      //     }),
      //     new StepInterface({
      //       id: 3,
      //       title: 'Devis 3/3',
      //       order: 3
      //     }),
      //   ];
      //   return of(steps.sort((a, b) => a.order - b.order));
      // },
      // step9: () => {
      //   const steps: StepInterface<string>[] = [
      //     new StepInterface({
      //       id: 1,
      //       title: 'Devis 1/3',
      //       order: 1
      //     }),
      //     new StepInterface({
      //       id: 2,
      //       title: 'Devis 2/3',
      //       order: 2
      //     }),
      //     new StepInterface({
      //       id: 3,
      //       title: 'Devis 3/3',
      //       order: 3
      //     }),
      //   ];
      //   return of(steps.sort((a, b) => a.order - b.order));
      // },
      // step10: () => {
      //   const steps: StepInterface<string>[] = [
      //     new StepInterface({
      //       id: 1,
      //       title: 'Devis 1/3',
      //       order: 1
      //     }),
      //     new StepInterface({
      //       id: 2,
      //       title: 'Devis 2/3',
      //       order: 2
      //     }),
      //     new StepInterface({
      //       id: 3,
      //       title: 'Devis 3/3',
      //       order: 3
      //     }),
      //   ];
      //   return of(steps.sort((a, b) => a.order - b.order));
      // },
      // // STEP : DÉMÉNAGEMENT
      // step11: () => {
      //   const steps: StepInterface<string>[] = [
      //     new StepInterface({
      //       id: 1,
      //       title: 'Devis 1/3',
      //       order: 1
      //     }),
      //     new StepInterface({
      //       id: 2,
      //       title: 'Devis 2/3',
      //       order: 2
      //     }),
      //     new StepInterface({
      //       id: 3,
      //       title: 'Devis 3/3',
      //       order: 3
      //     }),
      //   ];
      //   return of(steps.sort((a, b) => a.order - b.order));
      // },
      // step12: () => {
      //   const steps: StepInterface<string>[] = [
      //     new StepInterface({
      //       id: 1,
      //       title: 'Devis 1/3',
      //       order: 1
      //     }),
      //     new StepInterface({
      //       id: 2,
      //       title: 'Devis 2/3',
      //       order: 2
      //     }),
      //     new StepInterface({
      //       id: 3,
      //       title: 'Devis 3/3',
      //       order: 3
      //     }),
      //   ];
      //   return of(steps.sort((a, b) => a.order - b.order));
      // },
      // step13: () => {
      //   const steps: StepInterface<string>[] = [
      //     new StepInterface({
      //       id: 1,
      //       title: 'Devis 1/3',
      //       order: 1
      //     }),
      //     new StepInterface({
      //       id: 2,
      //       title: 'Devis 2/3',
      //       order: 2
      //     }),
      //     new StepInterface({
      //       id: 3,
      //       title: 'Devis 3/3',
      //       order: 3
      //     }),
      //   ];
      //   return of(steps.sort((a, b) => a.order - b.order));
      // },
      // // STEP : DEVIS
      // step14: () => {
      //   const steps: StepInterface<string>[] = [
      //     new StepInterface({
      //       id: 1,
      //       title: 'Devis 1/3',
      //       order: 1
      //     }),
      //     new StepInterface({
      //       id: 2,
      //       title: 'Devis 2/3',
      //       order: 2
      //     }),
      //     new StepInterface({
      //       id: 3,
      //       title: 'Devis 3/3',
      //       order: 3
      //     }),
      //   ];
      //   return of(steps.sort((a, b) => a.order - b.order));
      // },
      // step15: () => {
      //   const steps: StepInterface<string>[] = [
      //     new StepInterface({
      //       id: 1,
      //       title: 'Devis 1/3',
      //       order: 1
      //     }),
      //     new StepInterface({
      //       id: 2,
      //       title: 'Devis 2/3',
      //       order: 2
      //     }),
      //     new StepInterface({
      //       id: 3,
      //       title: 'Devis 3/3',
      //       order: 3
      //     }),
      //   ];
      //   return of(steps.sort((a, b) => a.order - b.order));
      // },
      // step16: () => {
      //   const steps: StepInterface<string>[] = [
      //     new StepInterface({
      //       id: 1,
      //       title: 'Devis 1/3',
      //       order: 1
      //     }),
      //     new StepInterface({
      //       id: 2,
      //       title: 'Devis 2/3',
      //       order: 2
      //     }),
      //     new StepInterface({
      //       id: 3,
      //       title: 'Devis 3/3',
      //       order: 3
      //     }),
      //   ];
      //   return of(steps.sort((a, b) => a.order - b.order));
      // },
      default: () => {
        return false;
      },
    };
    return (childrenStepsQuestion[stepId] || childrenStepsQuestion['default'])();

  }
}
