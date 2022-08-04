import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planejamento',
  styleUrls: ['./planejamento-anestesico.component.scss'],
  templateUrl: './planejamento-anestesico.component.html'

})
export class PlanejamentoAnestesicoComponent implements OnInit{
  @Output() closeDialogPlanejamento = new EventEmitter();
  ngOnInit(): void {

  }
  avancar(){
    this.closeDialogPlanejamento.emit();
  }
}
