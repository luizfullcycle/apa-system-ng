import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uti',
  templateUrl: './uti.component.html',
  styleUrls: ['./uti.component.scss']
})
export class UtiComponent implements OnInit{
  @Output() closeDialogUTI = new EventEmitter();
  ngOnInit(): void {

  }

  avancar(){
    this.closeDialogUTI.emit();
  }

}
