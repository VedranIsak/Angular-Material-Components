import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template:
  `
    <mat-card class="cardClass">
      <mat-card-title><img src="/assets/images/Information.png" style="width: 100%"></mat-card-title>
      <mat-card-content><a href="#">Information</a></mat-card-content>
    </mat-card>

    <mat-card class="cardClass">
      <mat-card-title><img src="/assets/images/Information.png" style="width: 100%"></mat-card-title>
      <mat-card-content><a href="#">Skapa riskbedömning</a></mat-card-content>
    </mat-card>

    <mat-card class="cardClass" style="width: 350px">
      <mat-card-title><img src="/assets/images/Information.png" style="width: 100%"></mat-card-title>
      <mat-card-content></mat-card-content>
    </mat-card>'

    <mat-card class="cardClass" style="width: 450px; margin-top: 5vmin;">
      <mat-card-title style="color: #004894">Översikt - Avdelning 9</mat-card-title>
      <mat-card-content><img src="/assets/images/Overview.jpg" style="width: 80%;"></mat-card-content>
    </mat-card>
  `
  ,
  styles: 
  [
    '.cardClass { width: 250px; height: 250px; border-radius: 40px; display: inline-block; margin-right: 3vmin; }'
  ]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
