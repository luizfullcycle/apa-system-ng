import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SistomatologicoComponent } from './sistomatologico.component';
import {CheckboxModule} from 'primeng/checkbox';
import { SintomatologicoService } from 'src/app/services/sintomatologico.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule,CheckboxModule, RadioButtonModule, ButtonModule],
  exports: [SistomatologicoComponent],
  declarations: [SistomatologicoComponent],
  providers: [SintomatologicoService]
})
export class SistomatologicoModule{}
