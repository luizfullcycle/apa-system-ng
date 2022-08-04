import { ExameFisicoModule } from './../exame-fisico/exame-fisico.module';
import { SistemaHimunologicoModule } from './../sistema-himunologico/sistema-himunologico.module';
import { NeurologicoModule } from './../neurologico/neurologico.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormPacienteComponent } from "./form-paciente/form-paciente.component";
import { PacienteRoutingModule } from "./paciente-routing.module";
import { PacienteComponent } from "./paciente.component";
import {InputTextModule} from 'primeng/inputtext';
import { TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {DialogModule} from 'primeng/dialog';
import { EspecialidadeModule } from "../especialidade/especialidade.module";
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import { AntecedentesFamiliarModule } from '../antecedentes-familiar/antecedentes-familiar.module';
import { SistomatologicoModule } from '../sistomatologistico/sistomatologico.module';
import { RespiratorioModule } from "../respiratorio/respiratorio.module";
import { AntecedentesFamiliaresService } from 'src/app/services/antecedentes-familiar.service';
import { GastroIntestinalModule } from '../gastrointestinal/gastrointestinal.module';
import { RenalModule } from '../renal/renal.module';
import { EndocrinoModule } from '../endocrino/endocrino.module';
import { LocomotorModule } from '../locomotor/locomotor.module';
import { NeoplasiaModule } from '../neoplasia/neoplasia.module';
import { MedicacoesModule } from '../medicacoes/medicacoes.module';
import { CirurgiaModule } from '../cirurgia/cirurgia.module';
import { ViasAereasModule } from '../vias-areas/vias-aereas.module';
import { MallampatiModule } from '../mallampati/mallampati.module';
import { DistanciaTireoModule } from '../distancia-tireo/distancia-tireo.module';
import { DenticaoPrognasticoModule } from '../denticao-prognastimo/denticao-prognastico.module';
import { MobilidadeVerticalModule } from '../mobilidade-vertical/mobilidade-vertical.module';
import { AsaModule } from '../asa/asa.module';
import { EmergenciaModule } from '../emergencia/emergencia.module';
import { PlanejamentoAnestesicoModule } from '../planejamento-anestesico/planejamento-anestesico.component.module';
import { HemocompanentesModule } from '../hemocompanantes/hemocompanentes.module';
import { UtiModule } from '../uti/uti.module';
import { AnestesiaModule } from '../anestesia/anestesia.module';
@NgModule({
  exports: [FormPacienteComponent,PacienteComponent],
  declarations: [FormPacienteComponent,PacienteComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule,
    PacienteRoutingModule,InputTextModule,TableModule,ButtonModule,DialogModule,
    DropdownModule,TableModule,DialogModule,TabViewModule,AnestesiaModule,
    FieldsetModule,EspecialidadeModule,AntecedentesFamiliarModule,SistomatologicoModule,
    RespiratorioModule,GastroIntestinalModule,RenalModule,EndocrinoModule,LocomotorModule,
    NeurologicoModule, SistemaHimunologicoModule,NeoplasiaModule,MedicacoesModule,PlanejamentoAnestesicoModule,
    CirurgiaModule, ExameFisicoModule,ViasAereasModule, MallampatiModule,DistanciaTireoModule,UtiModule,
    DenticaoPrognasticoModule, MobilidadeVerticalModule,AsaModule,EmergenciaModule,HemocompanentesModule],
    providers: [AntecedentesFamiliaresService]
})
export class PacienteModule{}
