import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  template: 
  `
  <mat-form-field class="form-field">
    <mat-label>Clearable input</mat-label>
      <input matInput type="text" [(ngModel)]="value">
      <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
          <mat-icon>close</mat-icon>
      </button>
  </mat-form-field>

  <div class="divClass">
    <span (click)=add() class=spanClass>+</span>
    <input [(ngModel)]=numberValue class=inputClass type="number" max="99" min = "0"> 
    <span (click)=subtract() class=spanClass>-</span>
   </div>
  `,
  styles: 
  [
    '* { box-sizing: border-box; }',
    '.form-field { width: 200px; }',
    '.divClass { border: 3px solid #004894; border-radius: 8px 8px; width: 100px; height: 40px; }',
    '.inputClass { outline: none; text-align: center; height: 100%; width: 60%; border: 0px; color: #004894; }',
    '.spanClass { font-size: 2rem; width: 20%; cursor: pointer; color: #004894; }',
    'input[type="number"]::-webkit-outer-spin-button',
    'input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }'
  ]
})
export class InputComponent implements OnInit {
  value = 'Clear me';
  numberValue: number = 50;
  minValue: number = 0;
  maxValue: number = 99;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    if(this.numberValue <= this.maxValue) {
      this.numberValue++;
    }
  }

  subtract() {
    if(this.numberValue >= this.minValue) {
      this.numberValue--;
    }
  }

}
