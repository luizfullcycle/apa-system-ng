import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.component.html',
  styleUrls: ['./emergencia.component.scss']
})
export class EmergenciaComponent implements OnInit{
  @Output() closeDialogEmergencia = new EventEmitter();
  ngOnInit(): void {

  }
  avancar(){
    this.closeDialogEmergencia.emit();
  }

}
