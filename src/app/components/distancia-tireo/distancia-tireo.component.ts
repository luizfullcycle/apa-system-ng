import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-distancia-tireo',
  templateUrl: './distancia-tireo.component.html',
  styleUrls: ['./distancia-tireo.component.html']
})
export class DistanciaTireoComponent implements OnInit{
  @Output() closeDialogDistanciaTireo = new EventEmitter();
  ngOnInit(): void {

  }

  public avancar(){
    this.closeDialogDistanciaTireo.emit();
  }

}
