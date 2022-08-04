import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RenalComponent } from './renal.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule,CheckboxModule,FormsModule,ReactiveFormsModule, ButtonModule],
  exports: [RenalComponent],
  declarations: [RenalComponent]
})
export class RenalModule{}
