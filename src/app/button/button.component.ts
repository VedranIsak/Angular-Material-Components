import { Component, OnInit } from '@angular/core';

//Fixa bild på en papperskorg till en av "Regular Button"

@Component({
  selector: 'app-button',
  template:
   `
    <button mat-flat-button id=continueButton class=large-btn>Fortsätt</button>
    <button mat-flat-button id=implementButton class=large-btn>Genomför</button>
    <button mat-flat-button id=statisticsButton class=large-btn>Statistik</button>
    <br>
    <button mat-flat-button id=textButton>Text</button>
    <br>
    <button mat-flat-button id=firstRegularButton class=regular-btn>Button</button>
    <button mat-flat-button id=secondRegularButton class=regular-btn>Button</button>
    <button mat-flat-button id=thirdRegularButton class=regular-btn>Button</button>
    <br>
    <mat-icon class=redIcon>error</mat-icon>
    <mat-icon class=yellowIcon>check_circle</mat-icon>
    <mat-icon class=greenIcon>warning</mat-icon>
  `,
  styles:
   [
    'button { font-size: 14px; border: 3px solid; margin: 1vmin; text-transform: uppercase; }',
    '.large-btn { width: 162px; height: 36px; border-radius: 8px; line-height: 100%; }',
    '.regular-btn { height: 42px; width: 144px; border-radius: 4px; }',
    '.greenIcon { color: #219653; margin: 1vmin; }',
    '.yellowIcon { color: #FED765; margin: 1vmin; }',
    '.redIcon { color: #EB5757; margin: 1vmin; }',
    '#continueButton { background: #FFFFFF; color: #1688D7; border-color: #1F95E4; }',
    '#implementButton { background: #1688D7; color: #FFFFFF; border-color: #1688D7; }',
    '#statisticsButton { background: #E3F2FB; color: #004894; border-color: #E3F2FB; }',
    '#textButton { background: #EB5757; color: #FFFFFF; border-color: #EB5757; width: 120px; height: 48px; }',
    '#firstRegularButton { background: #FFFFFF; color: #1688D7; border-color: #1688D7; text-align: right; }',
    '#secondRegularButton { background: #FFFFFF; color: #1688D7; border-color: #1688D7; }',
    '#thirdRegularButton { background: #1688D7; color: #FFFFFF; border-color: #1688D7; }'
  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
