import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { UtiComponent } from './uti.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,FormsModule,ButtonModule,RadioButtonModule],
  declarations: [UtiComponent],
  exports: [UtiComponent]
})
export class UtiModule{}
