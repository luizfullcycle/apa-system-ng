import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-locomotor',
  templateUrl: './locomotor.component.html',
  styleUrls: ['./locomotor.component.scss']
})
export class LocomotorComponent implements OnInit{

  formGroup: FormGroup;
  @Output() closeDialogLocomotor = new EventEmitter();
  ngOnInit(): void {
    this.initializeForm();
  }

  constructor(private fb: FormBuilder){

  }

  public initializeForm(){
    this.formGroup = this.fb.group({
      eDeficitLocomocao: [null, Validators.required],
      eDoencaColuna: [null, Validators.required],
      eDorArticular: [null, Validators.required],
      eFraquezaMuscular: [null, Validators.required],
      eMusculoDistrofia: [null, Validators.required],
      eOutros: [null, Validators.required]
    })
  }
  avancar(){
    this.closeDialogLocomotor.emit();
  }

}
