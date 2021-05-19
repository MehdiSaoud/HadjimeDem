export class QuestionBase<T> {
  id: number;
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  relatedTo: Array<number>;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];
  parentStep: number;

  constructor(options: {
      id?: number,
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      relatedTo?: Array<number>;
      controlType?: string;
      type?: string;
      options?: {key: string, value: string}[];
      parentStep?: number;
    } = {}) {
    this.id = options.id || 0,
    this.value = options.value!;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.relatedTo = options.relatedTo || [];
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.parentStep = options.parentStep || 0;
  }
}


