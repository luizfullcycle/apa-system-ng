import { RenalService } from './../../services/renal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-renal',
  templateUrl: './renal.component.html',
  styleUrls: ['./renal.component.scss']
})
export class RenalComponent implements OnInit{
  formGroup: FormGroup;
  @Output() eventCloseDialogRenal = new EventEmitter();
  ngOnInit(): void {
    this.formInitialize();
  }
  constructor(private fb: FormBuilder, private renalService: RenalService){

  }
  formInitialize(){
    this.formGroup = this.fb.group({
      hasDoencaRenal: [false],
      hasInsuficiencaRenal: [false],
      hasDialise: [false],
      hasNefrolitiase: [false],
      hasDorLombar: [false],
      hasHiperplasiaProspatica: [false],
      hasDisuria: [false],
      hasPoliuria: [false],
      hasCistite: [false],
      hasOutrosRenal: [false]
    })
  }
  avancar(){
    this.renalService.setRenalService(this.formGroup.value)
   this.eventCloseDialogRenal.emit()
  }



}
