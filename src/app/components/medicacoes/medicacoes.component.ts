import { FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medicacoes',
  templateUrl: './medicacoes-component.html',
  styleUrls: ['./medicacoes.component.scss']
})
export class MedicacoesComponent implements OnInit{
  @Output() eventMedicamentos = new EventEmitter();
  ngOnInit(): void {

  }
  constructor(private fb: FormBuilder) {

  }
  avancar(){
    this.eventMedicamentos.emit();
  }

}
