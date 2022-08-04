import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AnestesiaComponent } from './anestesia.component';
import { AnestesiologistaComponent } from './anestesiologista/anestesiologista.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,FormsModule,InputTextareaModule,ButtonModule],
  declarations: [AnestesiaComponent,AnestesiologistaComponent],
  exports: [AnestesiaComponent,AnestesiologistaComponent]
})
export class AnestesiaModule{}
