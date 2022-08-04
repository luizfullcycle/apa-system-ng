import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { NeoplasiaComponent } from './neoplasia.component';

@NgModule({
  exports: [NeoplasiaComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ButtonModule, CheckboxModule],
  declarations: [NeoplasiaComponent]
})
export class NeoplasiaModule{}
