import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anesteologista',
  templateUrl: './anestesiologista.component.html',
  styleUrls: ['./anestesiologista.component.scss']
})
export class AnestesiologistaComponent implements OnInit{

  @Output() closeDialogAngeologista = new EventEmitter();
  ngOnInit(): void {

  }
  avancar(){
    this.closeDialogAngeologista.emit();
  }
}
