export class QuestionBase<T> {
  id: number;
  value: any;
  key: string ;
  label: string;
  required: boolean;
  order: number;
  relatedTo: Array<number>;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];
  parentStep: number;
  disabled: boolean;
  img: string;
  placeholder: string;
  showLabel: string;
  errorMsg: string;

  constructor(options: {
      id?: number,
      value?: any;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      relatedTo?: Array<number>;
      controlType?: string;
      type?: string;
      options?: {key: string, value: string, img?:string,options?:object,type?:string}[];
      parentStep?: number;
      disabled?: boolean;
      img?: string;
      placeholder?: string;
      showLabel?: string;
      errorMsg?: string;
    } = {}) {
    this.id = options.id || 0,
    this.value = options.value!;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.relatedTo = options.relatedTo || [];
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.parentStep = options.parentStep || 0;
    this.disabled = options.disabled || false;
    this.img = options.img || '';
    this.placeholder =  options.placeholder || '';
    this.showLabel =  options.showLabel || 'true';
    this.errorMsg = options.errorMsg || '';
  }
}

