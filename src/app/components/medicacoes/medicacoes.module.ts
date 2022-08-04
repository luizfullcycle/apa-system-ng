import { InputTextareaModule } from 'primeng/inputtextarea';
import { MedicacoesComponent } from './medicacoes.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RadioButtonModule } from 'primeng/radiobutton';
import { MedicacoesCaseirasComponent } from './medicacoes-caseiras/medicacoes-caseiras.component';

@NgModule({
  imports: [CommonModule, FormsModule,ReactiveFormsModule, ButtonModule,RadioButtonModule, InputTextareaModule],
  exports: [MedicacoesComponent,MedicacoesCaseirasComponent],
  declarations: [MedicacoesComponent,MedicacoesCaseirasComponent]
})
export class MedicacoesModule{}
