import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-liberacao-cirurgia',
  templateUrl: './liberacao-cirurgia.component.html',
  styleUrls: ['./liberacao.component.scss']
})
export class LiberacaoCirurgiaComponent implements OnInit{
  @Output() closeDialogLiberacao = new EventEmitter();
  ngOnInit(): void {

  }
  avancar(){
    this.closeDialogLiberacao.emit();
  }

}
