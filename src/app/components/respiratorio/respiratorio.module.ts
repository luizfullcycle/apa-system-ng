import { ButtonModule } from 'primeng/button';
import { RespiratorioComponent } from './respiratorio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  imports: [CommonModule, FormsModule,ReactiveFormsModule,CheckboxModule, ButtonModule],
  exports:[RespiratorioComponent],
  declarations: [RespiratorioComponent]
})
export class RespiratorioModule{}
