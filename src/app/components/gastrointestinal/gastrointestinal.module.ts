import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GastroIntestinalComponent } from './gastrointestinal.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CheckboxModule, ButtonModule],
  exports: [GastroIntestinalComponent],
  declarations: [GastroIntestinalComponent],
  providers: []
})
export class GastroIntestinalModule{}
