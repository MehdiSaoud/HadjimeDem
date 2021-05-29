import { Injectable } from '@angular/core';
import { of } from 'rxjs';

/*** INTERFACE ***/
import { DropdownQuestion } from './interface/question-dropdown';
import { QuestionBase } from './interface/question-base';
import { TextboxQuestion } from './interface/question-textbox';
import { SwitchQuestion } from './interface/question-switch';
import { TextareaQuestion } from './interface/question-textarea';
import { radioGroupQuestion } from './interface/question-radiogroup';


@Injectable({ providedIn: 'root'})
export class QuestionService {

  
  getQuestions(stepId: string) {

    const childrenStepsQuestion = {
      // STEP : DÉPART
      step5: () => {
        const questions: QuestionBase<string>[] = [

          new radioGroupQuestion({
            key: 'dwelling-type',
            label: "",
            options: [
              {key:'house',img: "house-checkbox.png",  value: 'House'},
              {key: 'appartment',img: "appartment-checkbox.png",  value: 'Appartment'},
            ],
            order: 1,
            required: true,
            parentStep: 5
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
            order: 1,
            parentStep: 6
          }),
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step7: () => {
        const questions: QuestionBase<string>[] = [    
          new DropdownQuestion({
            id: 2,
            key: 'access',
            label: 'Etage',
            options: [
              {key: 'rdc',  value: 'rdc'},
              {key: '1',  value: '1'},
              {key: '2',  value: '2'},
              {key: '3',  value: '3'},
              {key: '4',  value: '4'},
              {key: '5',  value: '5'},
              {key: '6',  value: '6'},
              {key: '7',  value: '7'},
              {key: '8',  value: '8'},
              {key: '9',  value: '9'},
              {key: '10 +',  value: '10 +'},
            ],
            order: 2,
            required: true,
            parentStep: 7
          }),
          new SwitchQuestion({
            id: 4,
            key: 'elevator-depart',
            label: 'Disposez-vous d’un ascenseur ?',
            value: '',
            relatedTo:[3],
            order: 2,
            parentStep: 7
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
            disabled: true,
            order: 3,
            parentStep: 7
          }),
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      // // STEP : ARRIVÉ
      step8: () => {
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
            order: 3,
            parentStep: 8
          }),
          

        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step9: () => {
        const questions: QuestionBase<string>[] = [    
          new TextboxQuestion({
            key: 'adress',
            label: '',
            value: '',
            required: true,
            order: 1,
            parentStep: 9
          }),
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step10: () => {
        const questions: QuestionBase<string>[] = [    
          new TextboxQuestion({
            id: 1,
            key: 'adress',
            label: '',
            value: '',
            required: true,
            order: 1,
            parentStep: 10
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
            order: 2,
            parentStep: 10
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
            order: 1,
            parentStep: 10
          }),
          new SwitchQuestion({
            id: 4,
            key: 'elevator-arrive',
            label: 'Disposez-vous d’un ascenseur ?',
            value: '',
            relatedTo:[5],
            required: true,
            order: 2,
            parentStep: 10
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
            order: 3,
            parentStep: 10
          }),
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step11: () => {
        const questions: QuestionBase<string>[] = [    
          new TextboxQuestion({
            id: 1,
            key: 'adress',
            label: '',
            value: '',
            required: true,
            order: 1,
            parentStep: 11
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
            order: 2,
            parentStep: 11
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
            order: 1,
            parentStep: 11
          }),
          new SwitchQuestion({
            id: 4,
            key: 'elevator',
            label: 'Disposez-vous d’un ascenseur ?',
            value: '',
            relatedTo:[5],
            required: true,
            order: 2,
            parentStep: 11
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
            order: 3,
            parentStep: 11
          }),
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
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
