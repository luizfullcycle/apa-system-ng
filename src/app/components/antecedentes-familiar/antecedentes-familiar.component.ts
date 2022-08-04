import { EtilistaComponent } from './etilista/etilista.component';
import { DrogasElicitasComponent } from './drogas-ilicitas/drogas-elicitas.component';
import { TabagistaComponent } from './tabagista/tabagista.component';
import { AntecedentesFamiliares } from './../../model/antecedentes-familiares';
import { AntecedentesFamiliaresService } from './../../services/antecedentes-familiar.service';
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-antecedentes-familiar',
  templateUrl: './antecedentes-familiar.component.html',
  styleUrls: ['./antecedentes-familiar.component.scss']
})
export class AntecedentesFamiliarComponent implements OnInit{

  antecedentesFamiliar: AntecedentesFamiliares;
  @Output()closeDialoAntecendentes = new EventEmitter();
  @ViewChild(TabagistaComponent) tabagistaComponent: TabagistaComponent;
  @ViewChild(DrogasElicitasComponent) drogasElicitasComponent: DrogasElicitasComponent;
  @ViewChild(EtilistaComponent) etilistaComponent: EtilistaComponent;

  ngOnInit(): void {

  }

  constructor(private antecedentesFamiliareService: AntecedentesFamiliaresService){

  }

  public avancar(){
    this.prencherForm();
    this.antecedentesFamiliareService.setAtencedentesFamiliares(this.antecedentesFamiliar);
    this.closeDialoAntecendentes.emit();
  }

  public prencherForm(){
    const antecedentesFamiliares = new AntecedentesFamiliares();
    antecedentesFamiliares.eFumante = this.tabagistaComponent.formGroup.value.eFumante;
    antecedentesFamiliares.tempoFumo = this.tabagistaComponent.formGroup.value.tempoFumo;
    antecedentesFamiliares.quantidadeCigarros = this.tabagistaComponent.formGroup.value.quantidadeCigarros;
    antecedentesFamiliares.tempoDrogaIlicita = this.drogasElicitasComponent.formGroup.value.tempoDrogaIlicita;
    antecedentesFamiliares.usaDrogaIlicita = this.drogasElicitasComponent.formGroup.value.usaDrogaIlicita;
    antecedentesFamiliares.eEtilista = this.etilistaComponent.formGroup.value.eEtilista;
    antecedentesFamiliares.frequenciaEtilista = this.etilistaComponent.formGroup.value.frequenciaEtilista;
    this.antecedentesFamiliar = antecedentesFamiliares;

  }
}
