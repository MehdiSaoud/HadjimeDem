import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepsService } from '../../shared/services/step/steps.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mainSteps$: Observable<any[]>;

  constructor(service: StepsService) { 
    this.mainSteps$ = service.getSteps();
  }

  ngOnInit(): void {
  }

}
