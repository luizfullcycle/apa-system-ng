import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExameFisicoComponent } from './exame-fisico.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule,InputTextareaModule, ButtonModule],
  exports: [ExameFisicoComponent],
  declarations: [ExameFisicoComponent]
})
export class ExameFisicoModule{}
