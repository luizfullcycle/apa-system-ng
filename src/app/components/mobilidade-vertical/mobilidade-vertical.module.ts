import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MobilidadeVerticalComponent } from './mobilidade-vertical.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RadioButtonModule,ButtonModule],
  declarations: [MobilidadeVerticalComponent],
  exports:  [MobilidadeVerticalComponent]

})
export class MobilidadeVerticalModule{}
