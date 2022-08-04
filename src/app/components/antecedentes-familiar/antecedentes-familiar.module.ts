import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AntecedentesFamiliaresService } from './../../services/antecedentes-familiar.service';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { AntecedentesFamiliarComponent } from './antecedentes-familiar.component';
import { EtilistaModule } from './etilista/etilista.module';
import { TabagistaModule } from './tabagista/tabagista.module';
import { DrogasElicitasModule } from './drogas-ilicitas/drogas-elicitas.module';

@NgModule({
  imports: [CommonModule,EtilistaModule,TabagistaModule,ButtonModule,DrogasElicitasModule],
  declarations: [AntecedentesFamiliarComponent],
  exports: [AntecedentesFamiliarComponent],
  providers: [AntecedentesFamiliaresService]
})
export class AntecedentesFamiliarModule{}
