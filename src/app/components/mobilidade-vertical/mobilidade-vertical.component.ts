import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobilidade-vertical',
  templateUrl: './mobilidade-vertical.component.html',
  styleUrls: ['./mobilidade-vertical.component.scss']
})
export class MobilidadeVerticalComponent implements OnInit{
  @Output() closeDialogMobilidadeVertical = new EventEmitter();

  ngOnInit(): void {

  }
  avancar(){
   this.closeDialogMobilidadeVertical.emit();
  }

}
