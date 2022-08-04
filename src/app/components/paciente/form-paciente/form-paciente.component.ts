import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.html']
})
export class FormPacienteComponent implements OnInit{
  formGroup: FormGroup;
  sexos = [
    {id: '1', descricao: 'MASCULINO'},
    {id: '2', descricao: 'FEMININO'}
  ]
  constructor(private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.formGroup = this.fb.group({
      nomePaciente: [null, Validators.required],
      idadePaciente: [null,Validators.required],
      sexoPaciente: [null,Validators.required],
      alturaPaciente: [null,Validators.required],
      kiloPaciente: [null,Validators.required]
    })
  }

  public salvaPaciente(){
  }

  get formularioValido(): Boolean{
    return this.formGroup.valid;
  }

}
