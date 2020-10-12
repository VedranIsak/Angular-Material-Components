import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { ProgSpinnerComponent } from './prog-spinner/prog-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    ButtonComponent,
    CardComponent,
    TableComponent,
    InputComponent,
    ProgSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
