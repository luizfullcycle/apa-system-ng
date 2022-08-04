import { DistanciaTireoComponent } from './distancia-tireo.component';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RadioButtonModule, ButtonModule],
  exports: [DistanciaTireoComponent],
  declarations: [DistanciaTireoComponent]
})
export class DistanciaTireoModule{}
