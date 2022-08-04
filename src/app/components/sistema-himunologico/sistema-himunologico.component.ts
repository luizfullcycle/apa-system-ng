import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sistema-himunologico',
  templateUrl: './sistema-himunologico.component.html',
  styleUrls: ['./sistema-himunologico.component.scss']
})
export class SistemaHimunologicoComponent implements OnInit{

   formGroup: FormGroup;
   @Output() closeModalSistemaImunologico = new EventEmitter();
   ngOnInit(): void {
    this.initializeForm();
  }
  constructor(private fb: FormBuilder){

  }

  isAlergico(){
   return this.formGroup.get('eAlergico')?.value ? true : false;
  }
  public initializeForm(){
    this.formGroup = this.fb.group({
      eAlergico: [false],
      agente: [null],
      tipoReacao: [null]

    })
  }

  avancar(){
   this.closeModalSistemaImunologico.emit();
  }
}
