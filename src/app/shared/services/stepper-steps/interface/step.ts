import { Observable } from "rxjs";

export class StepInterface<T> {
  id: number;
  title: string;
  steps$: Observable<StepInterface<string>[]>;
  formGroup: {};
  order: number;

  constructor(options: {
      id?: number;
      title?: string;
      steps$?: Observable<StepInterface<string>[]>;
      formGroup?: string;
      order?: number;
    } = {}) {
    this.id = options.id || 0;
    this.title = options.title || '';
    this.steps$ = options.steps$!;
    this.formGroup = options.formGroup || '';
    this.order = options.order === undefined ? 1 : options.order;
  }
}