import { EtilistaComponent } from './etilista.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,FormsModule,RadioButtonModule],
  declarations: [EtilistaComponent],
  exports: [EtilistaComponent]
})
export class EtilistaModule{}
