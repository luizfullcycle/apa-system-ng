import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DrogasElicitasComponent } from './drogas-elicitas.component';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RadioButtonModule,InputTextareaModule],
  exports: [DrogasElicitasComponent],
  declarations: [DrogasElicitasComponent]
})
export class DrogasElicitasModule{}
