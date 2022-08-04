import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ViasAereasComponent } from './vias-aereas.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,FormsModule,RadioButtonModule,ButtonModule],
  exports: [ViasAereasComponent],
  declarations: [ViasAereasComponent]
})
export class ViasAereasModule{}
