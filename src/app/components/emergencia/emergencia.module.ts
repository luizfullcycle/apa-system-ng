import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EmergenciaComponent } from "./emergencia.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,FormsModule,ButtonModule,RadioButtonModule],
  declarations: [EmergenciaComponent],
  exports: [EmergenciaComponent]
})
export class EmergenciaModule{}
