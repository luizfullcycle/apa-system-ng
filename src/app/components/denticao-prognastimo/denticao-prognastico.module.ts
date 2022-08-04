import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DenticaoPrognastimoComponent } from './denticao-prognastimo.component';

@NgModule({
  imports:[CommonModule, ReactiveFormsModule,FormsModule,RadioButtonModule,ButtonModule],
  exports: [DenticaoPrognastimoComponent],
  declarations: [DenticaoPrognastimoComponent]
})
export class DenticaoPrognasticoModule{}
