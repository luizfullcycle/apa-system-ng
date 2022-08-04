import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
 selector: 'app-etilista',
 templateUrl: './etilista.component.html',
 styleUrls: ['./etilista.component.scss']
})
export class EtilistaComponent implements OnInit{

  @Input() formGroup: FormGroup;
  constructor(private fb: FormBuilder){

  }
  ngOnInit() {
    this.initializeForm();
  }

  public initializeForm(){
    this.formGroup = this.fb.group({
      eEtilista: [1, Validators.required],
      frequenciaEtilista: [null]

    })
  }

  get pacienteEtilista(): Boolean{
    return this.formGroup.get('eEtilista')?.value == '1' ? true : false;
  }
}
