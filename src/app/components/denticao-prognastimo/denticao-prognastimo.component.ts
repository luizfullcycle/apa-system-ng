import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-denticao-prognastimo',
  templateUrl: './denticao-prognastimo.component.html',
  styleUrls:['./denticao-prognastico.component.scss']
})
export class DenticaoPrognastimoComponent implements OnInit{
  @Output() closeDialogDenticaoPrognastimo = new EventEmitter();
  ngOnInit(): void {

  }
  avancar(){
    this.closeDialogDenticaoPrognastimo.emit();
  }

}
