import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { AsaComponent } from './asa.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RadioButtonModule,ButtonModule],
  declarations: [AsaComponent],
  exports: [AsaComponent]
})
export class AsaModule{}
