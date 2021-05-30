import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAccordeonComponent } from './input-accordeon.component';

describe('InputAccordeonComponent', () => {
  let component: InputAccordeonComponent;
  let fixture: ComponentFixture<InputAccordeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAccordeonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAccordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
