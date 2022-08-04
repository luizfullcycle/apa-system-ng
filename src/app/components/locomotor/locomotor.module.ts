import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocomotorComponent } from './locomotor.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, CheckboxModule, ButtonModule],
  exports: [LocomotorComponent],
  declarations: [LocomotorComponent]
})
export class LocomotorModule{}
