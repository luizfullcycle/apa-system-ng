import { AntecedentesFamiliaresService } from './../../services/antecedentes-familiar.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit, OnDestroy{

  formGroup: FormGroup;
  modalAntParentesco: boolean = false;
  modalSistomalogico: boolean = false;
  modalRespiratorio: boolean = false;
  modalGastroIntestinal: boolean = false;
  modalRenal: boolean = false;
  modalEndocrino: boolean = false;
  modalLocomotor: boolean = false;
  modalSistemaHimunologico: boolean = false;
  modalNeoplatia: boolean = false;
  modalMedicacao: boolean = false;
  modalMedicacaoCaseira: boolean = false;
  modalCirurgia: boolean = false;
  modalExameFisico: boolean = false;
  modalViasAreas: boolean = false;
  modalDistanciaTireo: boolean = false;
  modalModalMallepati: boolean = false;
  modalDenticao: boolean = false;
  modalMobilidadeVertical: boolean = false;
  modalAsa: boolean = false;
  modelEmergencia: boolean = false;
  modalPlanejamento: boolean = false;
  modalHemo: boolean = false;
  modalUTI: boolean= false;
  modalAnestesia: boolean = false;
  modalAnesteologista: boolean = false;
  modalLiberacao: boolean = false;
  constructor(private fb: FormBuilder,
    private antecendentesFamiliares: AntecedentesFamiliaresService){

  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.initializeForm();
  }
  openDialogAnesteologista(){
    this.modalAnestesia = false;
    this.modalAnesteologista = true;
  }
  openDialogAnestesia(){
    this.modalLiberacao = false;
    this.modalAnestesia = true;
  }
  openDialogLiberacao(){
    this.modalUTI = false;
    this.modalLiberacao = true;
  }

  initializeForm(){
    this.formGroup = this.fb.group({
      nome: [null,Validators.required]
    })
  }

  openModalExameFisico(){
    this.modalCirurgia = false;
    this.modalExameFisico = true;
  }

  openDialogNeoplastia(){
    this.modalSistemaHimunologico = false;
    this.modalNeoplatia = true;
  }
  openDialogMobilidadevertical(){
    this.modalDenticao = false;
    this.modalMobilidadeVertical = true;

  }
  openModal(){
    this.modalAntParentesco = true;
  }
  openDialogUTI(){
    this.modalHemo = false;
    this.modalUTI = true;
  }
  openModalRespiratorio(){
    this.modalSistomalogico = false;
    this.modalRespiratorio = true;
  }
  openModalRenal(){
    this.modalGastroIntestinal = false;
    this.modalRenal = true;
  }
  openDialogMedicamentoCaseiro(){
    this.modalMedicacao = false;
    this.modalMedicacaoCaseira = true;
  }
  openModalCirurgia(){
    this.modalMedicacaoCaseira = false;
    this.modalCirurgia = true;
  }
  openModalEndocrino(){
    this.modalRenal = false;
    this.modalEndocrino= true;
  }
  openDialogMedicacao(){
    this.modalNeoplatia = false;
    this.modalMedicacao = true;
  }
  openModalLocomotor(){
    this.modalEndocrino = false;
    this.modalLocomotor = true;
  }
  openDialogImunologico(){
    this.modalLocomotor = false;
    this.modalSistemaHimunologico = true;
  }

  openDialogSistomatologico(){
    this.modalAntParentesco = false;
    this.modalSistomalogico = true;
  }

  openModalGastro(){
   this.modalRespiratorio = false;
   this.modalGastroIntestinal = true;
  }
  openDialogViasAereas(){
    this.modalExameFisico = false;
    this.modalViasAreas = true;
  }
  openDialogEmergencia(){
    this.modalAsa = false;
    this.modelEmergencia = true;
  }
  openDialogPlanejamento(){
    this.modelEmergencia = false;
    this.modalPlanejamento = true;
  }
  openDialogHemo(){
    this.modalPlanejamento = false;
    this.modalHemo = true;
  }
  openDialogAsa(){
    this.modalMobilidadeVertical = false;
    this.modalAsa = true;
  }
  openDialogMallapti(){
    this.modalViasAreas = false;
    this.modalModalMallepati = true;
  }
  openDistanciaTireo(){
    this.modalModalMallepati = false;
    this.modalDistanciaTireo = true;
  }
  openDialogDenticao(){
    this.modalDistanciaTireo = false;
    this.modalDenticao = true;
  }

  salvarPaciente(){

  }

}
