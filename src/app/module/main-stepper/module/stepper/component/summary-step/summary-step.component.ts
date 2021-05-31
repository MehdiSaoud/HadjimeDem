import { Component, Input, OnInit } from '@angular/core';
import { FormuleService } from '../../../../../../shared/services/formule/formule.service';

@Component({
  selector: 'app-summary-step',
  templateUrl: './summary-step.component.html',
  styleUrls: ['./summary-step.component.scss']
})
export class SummaryStepComponent implements OnInit {

  @Input() quote:any;
  formules: any; // TODO FORMULE INTERFACE
  constructor(private formuleService: FormuleService) { 
    this.formuleService.getAllFormule().subscribe(result =>{
      this.formules = result;
    })
  }

  ngOnInit(): void {
  }

}
