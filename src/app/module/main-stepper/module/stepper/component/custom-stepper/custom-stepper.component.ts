import { Directionality } from '@angular/cdk/bidi';
import { CdkStepper } from '@angular/cdk/stepper';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepsService } from '../../../../../../shared/services/step/steps.service';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }]
})
export class CustomStepperComponent extends CdkStepper implements OnInit {
  mainSteps$: Observable<any[]>;

  constructor(stepService: StepsService, dir: Directionality,
    changeDetectorRef: ChangeDetectorRef) { 
    super(dir, changeDetectorRef);
    this.mainSteps$ = stepService.getSteps();
  }

  ngOnInit(): void {
  }

  onClick(index: number): void {
    this.selectedIndex = index;
  }

}
