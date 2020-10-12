import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  template: 
  `
    <button mat-flat-button (click)=showSnackBar()>Show Snackbar</button>
  `,
  styles: [
    `
    .actionText {
      color: #FFFFFF !important;
      .mat-simple-snackbar-action {
        color: #FFFFFF !important;
      }
    }`
    ,
    `
    button {
      background: #0066B3;
      color: #FFFFFF;
      border-radius: 4px;
    }`
  ]
})
export class SnackbarComponent implements OnInit {
  dismissTime = 2500;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  showSnackBar() {
    this.snackBar.open("Simple Snackbar", "Dismiss", {
      duration: this.dismissTime,
      panelClass: ['primaryLight', 'actionText']
    });
  }

}
