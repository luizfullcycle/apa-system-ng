import { NeurologicoComponent } from './neurologico.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  imports:[CommonModule,ReactiveFormsModule, FormsModule, CheckboxModule],
  exports: [NeurologicoComponent],
  declarations: [NeurologicoComponent]
})
export class NeurologicoModule{}
