import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgSpinnerComponent } from './prog-spinner.component';

describe('ProgSpinnerComponent', () => {
  let component: ProgSpinnerComponent;
  let fixture: ComponentFixture<ProgSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
