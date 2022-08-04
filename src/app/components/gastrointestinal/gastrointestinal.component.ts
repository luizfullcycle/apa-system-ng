import { AntecedentesFamiliaresService } from './../../services/antecedentes-familiar.service';
import { RespiratorioService } from 'src/app/services/respiratorio.service';
import { SintomatologicoService } from './../../services/sintomatologico.service';
import { GastroIntestinalService } from './../../services/gastro-intestinal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { combineLatest, forkJoin } from 'rxjs';

@Component({
  selector: 'app-gastrointestinal',
  templateUrl: './gastrointestinal.component.html',
  styleUrls: ['./gastrointestinal.component.scss']
})
export class GastroIntestinalComponent implements OnInit{
  formGroup: FormGroup;
  @Output() closeGastroIntestinal = new EventEmitter();
  constructor(private fb: FormBuilder, private gastroIntestinalService: GastroIntestinalService,
    private sintomatologicoService: SintomatologicoService,private respiratorioService: RespiratorioService,
    private atencedentesService: AntecedentesFamiliaresService){

  }
  ngOnInit(): void {
   this.initializeForm()
  }
  public initializeForm(){
    this.formGroup = this.fb.group({
      hasEpigastrica: [false],
      hasGastrite: [false],
      hasRefluxoGastro: [false],
      hasUlceraPeptica: [false],
      hasHerniaHiato: [false],
      hasObstrucaoIntestinal: [false],
      hasIctericia: [false],
      hasCirosse: [false],
      hasVomitoDiarreia: [false],
      hasEsteatoseHepatica: [false],
      hasOutrosGastro: [false]
    })
  }
  avancar(){
    this.gastroIntestinalService.setGastroIntestinal(this.formGroup.value)
    this.closeGastroIntestinal.emit();
  }
}
