import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prog-spinner',
  template: 
  `
  <button mat-flat-button (click)=loadData()>Load Data</button>
  <mat-spinner *ngIf="showSpinner" class="mat-spinner-color"></mat-spinner>
  
  `,
  styles: 
  [
    '.mat-spinner-color::ng-deep circle { stroke: #004894 !important; }'
  ]
})
export class ProgSpinnerComponent implements OnInit {
  showSpinner = false;
  constructor() { }

  ngOnInit(): void {
  }

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000)
  }

}
