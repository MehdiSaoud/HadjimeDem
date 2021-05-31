import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CdkStepper } from "@angular/cdk/stepper";

/*** INTERFACE ***/
import { StepInterface } from "@app/shared/services/step/interface/step";

/*** SERVICE ***/
import { StepperControlService } from "@app/shared/services/step/steps-control.service";
import { QuoteService } from '../../../../shared/services/quote/quote.service';



@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements OnInit {

  @ViewChild("cdkStepper") cdkStepper!: CdkStepper;
  @Input() steps: StepInterface<string>[] = [];
  @Input() mainForm: FormGroup = new FormGroup({});
  @Input() parentStepTitle: StepInterface<string> | undefined;
  @Output() onStepsValid = new EventEmitter();
  form: FormGroup = new FormGroup({});
  quoteToPost:any ; // TODO  QUOTE SCHEMA
  quote: any; // TODO QUOTE SCHEMA
  formValues:Array<any> = [];


  constructor(private scs: StepperControlService, private quoteService:QuoteService) {}

  ngOnInit(): void {
    // Init FormGroup for each steps
    this.form = this.scs.toFormGroup(this.steps);
    // Set Steps Form Group to the main-stepper
    this.mainForm.controls[this.steps[0].parentStep] = this.form;
    // Add control for nestedFormGroup
    let nestedFormGroup = this.mainForm.controls[
      this.steps[0].parentStep
    ] as FormGroup;
    nestedFormGroup.addControl(
      "stepsValid",
      new FormControl("", Validators.required)
    );
  }

  /**
   * Move to next step
   * If last step Emit event to change main-stepper step
   */
  nextStep(step: FormGroup,stepId: number) {  
    let index = this.cdkStepper.selectedIndex
    index++
    if (step.valid && stepId !== 14) {
      this.cdkStepper.next();
      if(this.isStepperValid() && index === this.cdkStepper.steps.length ){
        this.onStepsValid.emit('next')
      }
    } else {
      this.markFormGroupTouched(step);
    } 

    if(step.valid && stepId === 14){
      this.getQuote()
    }
  }

  /**
   * Move to previous step
   * If last step Emit event to change main-stepper step
   */
  previousStep(step: FormGroup) {
    let index = this.cdkStepper.selectedIndex
      
      this.cdkStepper.previous();
      if( index === 0 ){
        this.onStepsValid.emit('previous')
      }
  } 

  isStepperValid() {
    let validCount = 0;
    let valid;
     
    this.steps.forEach((step) => {
      let formGroup1 = this.mainForm.controls[step.parentStep] as FormGroup;
      let formGroup2 = formGroup1.controls[step.id] as FormGroup;
      if (formGroup2.valid) {
        validCount++;
      }
      if (validCount === this.steps.length) {
        formGroup1.get("stepsValid")?.setValue(true);
        valid =  true
      } else {
        formGroup1.get("stepsValid")?.setValue(false);
        valid = false
      }
    });  
    return valid;
  }

  getQuote(){
    this.formValues = [];
    for (const property in this.mainForm.controls) {
      // console.log(`${property}: ${this.mainForm.controls[property]}`);
      let formGroup1 = this.mainForm.controls[property] as FormGroup
      for(const property1 in formGroup1.controls){
        let formGroup2 = formGroup1.controls[property1] as FormGroup;
        this.formValues.push(formGroup2.value)
      }
    }

    this.buildQuoteObject(this.formValues)
    this.cdkStepper.next();
    this.quoteService.postQuote(this.quoteToPost).subscribe((result:any)=>{
      this.quote = result;
      this.cdkStepper.next();
    })
  }

  buildQuoteObject(values:Array<any>){
    console.log(values);
    
    this.quoteToPost = {};
    // this.quoteToPost.state = 'Relance';
    this.quoteToPost.volume = values[9].volume;
    this.quoteToPost.createdAt = Date.now(); 
    this.quoteToPost.relocationDate = {start: new Date(values[8].start), end: new Date(values[8].end)};
    this.quoteToPost.relocationDescription = values[8].projectDescription;
    this.quoteToPost.recoveryCount = 0;
    this.quoteToPost.customer = {
      lastName: values[11].name,
      firstName: values[11].firstname,
      mail: values[11].mail,
      phone: values[11]['phone-numer']
    }
    this.quoteToPost.arrival = {
      homeType: values[0]['dwelling-type'],
      address: values[1].adress,
      floor:  values[2].access,
      elevator: {
      available: values[2]['elevator-depart'],
      size: values[2]['elevator-access']
    },
      additionalInfo: values[2]['acces']
    }

    this.quoteToPost.leaving = {
      homeType: values[4]['dwelling-type'],
      address: values[5].adress,
      floor:  values[6].access,
      elevator: {
      available: values[6]['elevator-arrive'],
      size: values[6]['elevator-access-depart']
    },
      additionalInfo: values[6]['acces']
    }
    console.log(this.quoteToPost);
  }
  /**
   * Marks all controls in a form group as touched
   * @param formGroup - The form group to touch
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control:any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
