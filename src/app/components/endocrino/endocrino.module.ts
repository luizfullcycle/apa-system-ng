import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EndocrinoComponent } from './endocrino.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CheckboxModule, ButtonModule],
  declarations: [EndocrinoComponent],
  exports: [EndocrinoComponent]
})
export class EndocrinoModule{}
