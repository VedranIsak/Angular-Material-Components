import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const ModuleDependencies = 
[
  CommonModule, 
  MatSnackBarModule, 
  MatButtonModule, 
  MatIconModule, 
  MatCardModule,
  MatTableModule,
  MatInputModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports: [
    ModuleDependencies
  ],
  exports: [ModuleDependencies]
})
export class MaterialModule { }
