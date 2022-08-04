import { Especialidade } from './../../model/especialidade';
import { EspecialidadeService } from './../../services/especialidade.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-especialdade',
  templateUrl: './especialidade.component.html',
  styleUrls: ['./especialidade.component.scss']
})
export class EspecialidadeComponent implements OnInit{
  formGroup: FormGroup;
  especialidades = new Array<Especialidade>();
  constructor(private especialidadeService: EspecialidadeService, private fb: FormBuilder){

  }

  ngOnInit() {
    this.initalizeForm();
     this.getAllEspecialidade();
  }
  initalizeForm(){
    this.formGroup = this.fb.group({
      especialidades: [null, Validators.required],
      cirurgiaProposta: [null]
    })
  }

  public getAllEspecialidade(){
    this.especialidadeService.getAllEspecialidades().
        subscribe(resp => {
          console.log(resp)
          this.especialidades = resp;
        })
  }
  get formularioValido(): Boolean {
    return this.formGroup.valid;
  }
}
