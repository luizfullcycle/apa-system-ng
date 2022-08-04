import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mallampati',
  templateUrl: './mallampati.component.html',
  styleUrls: ['./mallampati.component.scss']
})
export class MallampatiComponent implements OnInit{
  @Output() closeDialogMallampati = new EventEmitter();
  ngOnInit(): void {

  }
  avancar(){
    this.closeDialogMallampati.emit();
  }
}
