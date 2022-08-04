import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RadioButtonModule } from 'primeng/radiobutton';
import { MallampatiComponent } from './mallampati.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RadioButtonModule, ButtonModule],
  exports: [MallampatiComponent],
  declarations: [MallampatiComponent]
})
export class MallampatiModule{}
