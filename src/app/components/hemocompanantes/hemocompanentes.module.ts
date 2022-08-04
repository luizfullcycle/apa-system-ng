import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { HemocompanentesComponent } from './hemocompanentes.component';

@NgModule({
  imports: [CommonModule,FormsModule, ReactiveFormsModule,CheckboxModule, ButtonModule],
  declarations: [HemocompanentesComponent],
  exports: [HemocompanentesComponent]
})
export class HemocompanentesModule{}
