import { EspecialidadeService } from './../../services/especialidade.service';
import { FieldsetModule } from 'primeng/fieldset';
import { EspecialidadeComponent } from './especialidade.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [EspecialidadeComponent],
  exports: [EspecialidadeComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FieldsetModule,
    InputTextareaModule,DropdownModule],
  providers: [EspecialidadeService]
})
export class EspecialidadeModule{}
