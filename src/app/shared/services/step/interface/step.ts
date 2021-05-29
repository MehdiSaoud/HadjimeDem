import { Observable } from "rxjs";
import { FormControl } from '@angular/forms';

export class StepInterface<T> {
  id: number;
  title: string;
  steps$: Observable<StepInterface<string>[]>;
  parentStep: number;
  formGroup: FormControl;
  order: number;
  type: string;

  constructor(options: {
      id?: number;
      title?: string;
      steps$?: Observable<StepInterface<string>[]>;
      parentStep?: number;
      formGroup?: FormControl;
      order?: number;
      type?: string;
    } = {}) {
    this.id = options.id || 0;
    this.title = options.title || '';
    this.steps$ = options.steps$!;
    this.parentStep = options.parentStep! ;
    this.formGroup = options.formGroup! || undefined;
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || 'question';
  }
}