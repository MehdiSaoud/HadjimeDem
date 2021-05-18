import { QuestionBase } from './question-base';

export class SwitchQuestion extends QuestionBase<string> {
  controlType = 'switch';
}