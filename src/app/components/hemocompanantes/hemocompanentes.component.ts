import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hemo',
  templateUrl: './hemocompanentes.component.html',
  styleUrls: ['./hemocompanentes.component.scss']
})
export class HemocompanentesComponent implements OnInit{
  @Output() closeDialogHemo = new EventEmitter();
  ngOnInit(): void {

  }

  avancar(){
    this.closeDialogHemo.emit();
  }

}
