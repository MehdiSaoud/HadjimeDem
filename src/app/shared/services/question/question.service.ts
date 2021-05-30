import { Injectable } from '@angular/core';
import { of } from 'rxjs';

/*** INTERFACE ***/
import { DropdownQuestion } from './interface/question-dropdown';
import { QuestionBase } from './interface/question-base';
import { TextboxQuestion } from './interface/question-textbox';
import { SwitchQuestion } from './interface/question-switch';
import { TextareaQuestion } from './interface/question-textarea';
import { radioGroupQuestion } from './interface/question-radiogroup';
import { DatePickerQuestion } from './interface/question-datepicker';
import { AccordeonQuestion } from './interface/question-accordeon';


@Injectable({ providedIn: 'root'})
export class QuestionService {

  
  getQuestions(stepId: string) {

    const childrenStepsQuestion = {
      // STEP : DÉPART
      step5: () => {
        const questions: QuestionBase<string>[] = [
          new radioGroupQuestion({
            key: 'dwelling-type',
            options: [
              {key:'house',img: "house-checkbox.png",  value: 'House'},
              {key: 'appartment',img: "appartment-checkbox.png",  value: 'Appartment'},
            ],
            order: 1,
            required: true,
            errorMsg: "Veuillez selectionnez un type d'habitation",
            showLabel: 'false',
            parentStep: 5
          })
        ]  
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step6: () => {
        const questions: QuestionBase<string>[] = [    
          new TextboxQuestion({
            key: 'adress',
            label: 'Adresse',
            value: '',
            placeholder:'Ex. 54 Boulevard Gabriel Peri paris 75005',
            required: true,
            showLabel: 'false',
            errorMsg: 'Veuillez saisir une adresse',
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
            errorMsg: "Veuillez saisir le nombre d'étage de votre habitation",
            order: 2,
            showLabel: 'true',
            required: true,
            parentStep: 7
          }),
          new SwitchQuestion({
            id: 4,
            key: 'elevator-depart',
            label: 'Disposez-vous d’un ascenseur ?',
            value: false,
            relatedTo:[3],
            showLabel: 'false',
            order: 2,
            parentStep: 7
          }),
          new DropdownQuestion({
            id: 3,
            key: 'elevator-access',
            label: 'Vos meubles rentrent-ils dans l’ascenceur ?',
            options: [
              {key: 'oui',  value: 'Oui'},
              {key: 'non',  value: 'Non'},
              {key: 'en grande partie',  value: 'En grande partie'},
            ],
            disabled: true,
            order: 3,
            parentStep: 7
          }),
          new TextareaQuestion({
            key: 'acces',
            label: 'Informations supplémentaires sur l\'accès',
            value: '',
            placeholder: "Ex. Accès via une courette, Nombre d'escalier ...",
            required: false,
            order: 4,
            parentStep: 7
          }),
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      // // STEP : ARRIVÉ
      step8: () => {
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
            showLabel: 'false',
            parentStep: 5
          }),

        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step9: () => {
        const questions: QuestionBase<string>[] = [    
          new TextboxQuestion({
            key: 'adress',
            label: 'Adresse',
            value: '',
            placeholder:'Ex. 54 Boulevard Gabriel Peri paris 75005',
            required: true,
            showLabel: 'false',
            errorMsg: 'Veuillez saisir une adresse',
            order: 1,
            parentStep: 9
          }),
          
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step10: () => {
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
            parentStep: 10
          }),
          new SwitchQuestion({
            id: 4,
            key: 'elevator-arrive',
            label: 'Disposez-vous d’un ascenseur ?',
            value: '',
            relatedTo:[5],
            required: false,
            order: 2,
            parentStep: 10
          }),
          new DropdownQuestion({
            id: 5,
            key: 'elevator-access-depart',
            label: 'Vos meubles rentrent-ils dans l’ascenceur ?',
            options: [
              {key: '1',  value: 'Oui'},
              {key: '2',  value: 'Non'},
              {key: '3',  value: 'En grande partie'},
            ],
            disabled: true,
            order: 3,
            parentStep: 10
          }),
          new TextareaQuestion({
            key: 'acces',
            label: 'Informations supplémentaires sur l\'accès',
            value: '',
            required: false,
            order: 4,
            parentStep: 10
          }),
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step11: () => {
        const questions: QuestionBase<any>[] = [    
          new DatePickerQuestion({
            id: 1,
            key: 'date',
            label: 'Selectionnez une date',
            value: '',
            errorMsg: 'Veuillez saisir une date',
            required: true,
            order: 1,
            parentStep: 11
          }) , 
          new TextareaQuestion({
            key: 'projectDescription',
            label: 'Description du projet',
            value: '',
            required: false,
            order: 2,
            parentStep: 11
          }),      
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step12: () => {
        const questions: QuestionBase<any>[] = [    
          new AccordeonQuestion({
            id: 1,
            key: 'volume',
            label: 'Volume',
            options: [
              {key: 'm2',  value: 'J’indique ma surface en m2'},
              {key: 'm3',  value: 'Je connais déjà mon volume en m3'},
            ],
            order: 1,
            required: true,
            showLabel: 'false',
            errorMsg: 'Veuillez remplir une des options',
            parentStep: 12
          })        
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      step14: () => {
        const questions: QuestionBase<string>[] = [
          new TextboxQuestion({
            id: 1,
            key: 'name',
            label: 'Nom',
            placeholder: 'Ex. Lepage',
            errorMsg: 'Veuillez renseigner votre nom',
            type: 'text',
            order: 1,
            required: true,
  
            parentStep: 12
          }),
          new TextboxQuestion({
            id: 1,
            key: 'firstname',
            label: 'Prenom',
            placeholder: 'Ex. Max',
            type: 'text',
            required: true,
            errorMsg: 'Veuillez renseigner votre prénom',
            order: 2,
            parentStep: 12
          }),
          new TextboxQuestion({
            id: 3,
            key: 'mail',
            type: 'email',
            label: 'Adresse mail',
            placeholder: 'Ex. maxlepage@hadjime.com',
            errorMsg: 'Veuillez saisir un mail',
            required: true,
            order: 3,
            parentStep: 12
          }),
          new TextboxQuestion({
            id: 2,
            key: 'phone-numer',
            type: 'tel',
            label: 'Numéro de téléphone',
            placeholder: 'Ex. 0781590403',
            errorMsg: 'Veuillez saisir un numéro de téléphone',
            required: true,
            order: 4,
            parentStep: 12
          })
        ];
        return of(questions.sort((a, b) => a.order - b.order));
      },
      default: () => {
        return false;
      },
    };
    return (childrenStepsQuestion[stepId] || childrenStepsQuestion['default'])();

  }
}
