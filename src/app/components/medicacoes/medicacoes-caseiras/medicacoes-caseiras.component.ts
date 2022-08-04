import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medicacoes-caseiras',
  templateUrl: './medicacoes-caseiras.component.html',
  styleUrls: ['./medicacoes-caseiras.component.scss']
})
export class MedicacoesCaseirasComponent implements OnInit{

  @Output() closeDialogMedicacaocaseira = new EventEmitter();
  ngOnInit(): void {

  }

  avancar(){
    this.closeDialogMedicacaocaseira.emit();
  }

}
