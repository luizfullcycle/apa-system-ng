import { AntecedentesFamiliaresService } from './../../../services/antecedentes-familiar.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-tabagista',
    templateUrl: './tabagista.component.html',
    styleUrls: ['./tabagista.component.scss']
})
export class TabagistaComponent implements OnInit {

  @Output() eventFormTabagista =  new EventEmitter();
  openDialogEtilista: boolean = false;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private antecedentesFamiliaresService: AntecedentesFamiliaresService){

  }

  ngOnInit() {
     this.initializeForm();
  }
  public initializeForm(){
    this.formGroup = this.fb.group({
        eFumante: [1, Validators.required],
        tempoFumo: [null],
        quantidadeCigarros: [null]
    })
  }
  get isFumante(): Boolean{
    return this.formGroup.get('eFumante')?.value == 1 ? true : false;
  }

}
