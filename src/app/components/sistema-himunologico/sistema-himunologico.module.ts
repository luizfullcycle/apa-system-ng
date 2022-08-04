import { ButtonModule } from 'primeng/button';
import { SistemaHimunologicoComponent } from './sistema-himunologico.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import {ToggleButtonModule} from 'primeng/togglebutton';
@NgModule({
  imports: [CommonModule, FormsModule,ReactiveFormsModule,CheckboxModule,InputTextareaModule,
    ToggleButtonModule, InputTextareaModule, ButtonModule],
  declarations: [SistemaHimunologicoComponent],
  exports: [SistemaHimunologicoComponent]
})
export class SistemaHimunologicoModule{}
