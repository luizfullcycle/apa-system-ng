import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CirurgiaComponent } from "./cirurgia.component";
import { RadioButtonModule } from 'primeng/radiobutton';
import { LiberacaoCirurgiaComponent } from './liberacao-cirurgia/liberacao-cirurgia.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RadioButtonModule, ButtonModule,InputTextareaModule],
  declarations: [CirurgiaComponent,LiberacaoCirurgiaComponent],
  exports: [CirurgiaComponent,LiberacaoCirurgiaComponent]
})
export class CirurgiaModule{}
