import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cirurgia',
  templateUrl: './cirurgia.component.html',
  styleUrls: ['./cirurgia.component.scss']
})
export class CirurgiaComponent implements OnInit{

  @Output() closeDialogCirurgia = new EventEmitter();
  ngOnInit(): void {

  }

  avancar(){
    this.closeDialogCirurgia.emit();
  }


}
