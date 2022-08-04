import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-asa',
  templateUrl: './asa.component.html',
  styleUrls: ['./asa.component.scss']
})
export class AsaComponent implements OnInit{
  @Output() closeDialogAsa = new EventEmitter();
  ngOnInit(): void {

  }

  avancar(){
    this.closeDialogAsa.emit();
  }

}
