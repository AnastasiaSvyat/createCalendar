import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const material = [
  FormsModule,
  MatFormFieldModule,
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
