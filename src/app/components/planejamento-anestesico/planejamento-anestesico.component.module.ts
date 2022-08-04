import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PlanejamentoAnestesicoComponent } from './planejamento-anestesico.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,FormsModule,ButtonModule,CheckboxModule],
  exports: [PlanejamentoAnestesicoComponent],
  declarations: [PlanejamentoAnestesicoComponent]
})
export class PlanejamentoAnestesicoModule{}
