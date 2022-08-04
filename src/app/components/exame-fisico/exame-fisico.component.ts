import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'app-exame-fisico',
   templateUrl: './exame-fisico.component.html',
   styleUrls: ['./exame-fisico.component.scss']
})
export class ExameFisicoComponent implements OnInit{
  @Output() closeDialogExameFisico =  new EventEmitter();
  ngOnInit(): void {

  }
  avancar(){
    this.closeDialogExameFisico.emit();
  }

}
