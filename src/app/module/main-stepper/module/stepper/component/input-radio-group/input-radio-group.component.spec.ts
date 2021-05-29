import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRadioGroupComponent } from './input-radio-group.component';

describe('InputCheckBoxComponent', () => {
  let component: InputRadioGroupComponent;
  let fixture: ComponentFixture<InputRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRadioGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
