import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TabagistaComponent } from './tabagista.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RadioButtonModule } from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { EtilistaModule } from '../etilista/etilista.module';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,FormsModule,RadioButtonModule,InputTextareaModule,
  ButtonModule, DialogModule,EtilistaModule,FieldsetModule],
  exports: [TabagistaComponent],
  declarations: [TabagistaComponent]
})
export class TabagistaModule{}
