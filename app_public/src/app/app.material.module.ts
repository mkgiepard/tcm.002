import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatIconModule, 
  MatSidenavModule, 
  MatListModule,
  MatButtonModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatCardModule, 
  MatTableModule,
  MatRadioModule 
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatCardModule, 
    MatTableModule, 
    MatRadioModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatFormFieldModule, 
    MatCardModule, 
    MatTableModule, 
    MatRadioModule,
  ]
})

export class AppMaterialModule { }