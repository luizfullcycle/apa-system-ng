import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vias-aereas',
  templateUrl: './vias-aereas.component.html',
  styleUrls: ['./vias-aereas.component.scss']
})
export class ViasAereasComponent implements OnInit{
  @Output() closeDialogViasAereas = new EventEmitter();
  ngOnInit(): void {

  }
  avancar(){
    this.closeDialogViasAereas.emit();
  }

}
