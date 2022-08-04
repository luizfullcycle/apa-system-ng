import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anestesia',
  templateUrl: './anestesia.component.html',
  styleUrls: ['./anestesia.component.scss']
})
export class AnestesiaComponent implements OnInit{
  @Output() closeDialogAnestesia = new EventEmitter();
  ngOnInit(): void {

  }

  public avancar(){
    this.closeDialogAnestesia.emit();
  }
}
