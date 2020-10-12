import { Component, OnInit } from '@angular/core';

export interface Assessment {
  department: string;
  done: string;
  updated: string;
  status: string;
  assessment: string;
}

const ELEMENT_DATA: Assessment[] = [
  {department: 'Avdelning 9', done: '2020-08-01', updated: '2020-09-02', status: 'Ej klar', assessment: 'Statistik'},
  {department: 'Avdelning 10', done: '2020-08-01', updated: '2020-09-02', status: 'Ej klar', assessment: 'Statistik'},
  {department: 'Neurologen', done: '2020-08-01', updated: '2020-09-02', status: 'Pågår', assessment: 'Statistik'},
  {department: 'Kardiologen', done: '2020-08-01', updated: '2020-09-02', status: 'Pågår', assessment: 'Statistik'},
  {department: 'Avdelning 2', done: '2020-08-01', updated: '2020-09-02', status: 'Ej klar', assessment: 'Statistik'},
];

@Component({
  selector: 'app-table',
  template: 
  `
<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
  <ng-container matColumnDef="department">
    <th mat-header-cell *matHeaderCellDef> Avdelning </th>
    <td mat-cell *matCellDef="let element"> {{element.department}} </td>
  </ng-container>

  <ng-container matColumnDef="done">
    <th mat-header-cell *matHeaderCellDef> Senast utförd </th>
    <td mat-cell *matCellDef="let element"> {{element.done}} </td>
  </ng-container>

  <ng-container matColumnDef="updated">
    <th mat-header-cell *matHeaderCellDef> Uppdateras </th>
    <td mat-cell *matCellDef="let element"> {{element.updated}} </td>
  </ng-container>

  <ng-container matColumnDef="status">
    <th mat-header-cell *matHeaderCellDef> Status </th>
    <td mat-cell *matCellDef="let element"> {{element.status}} </td>
  </ng-container>

  <ng-container matColumnDef="assessment">
    <th mat-header-cell *matHeaderCellDef></th>
    <td mat-cell *matCellDef="let element"> 
    <button mat-flat-button id=statsButton class=large-btn> {{element.assessment}} </button> 
    </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
  `,
  styles: 
  [
    'table { width: 100%; }',
    '.mat-cell { color: #004894 }',
    '.mat-header-cell { color: #004894; font-size: 1.4rem; }',
    '.large-btn { width: 162px; height: 36px; border-radius: 8px; line-height: 100%; }',
    '#statsButton { background: #E3F2FB; color: #004894; border-color: #E3F2FB; }'
  ]
})
export class TableComponent implements OnInit {
displayedColumns: string[] = ['department', 'done', 'updated', 'status', 'assessment'];
dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
