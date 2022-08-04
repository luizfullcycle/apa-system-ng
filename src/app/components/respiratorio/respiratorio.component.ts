import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RespiratorioService } from 'src/app/services/respiratorio.service';

@Component({
  selector: 'app-respiratorio',
  templateUrl: './respiratorio.component.html',
  styleUrls: ['./respiratorio.component.scss']
})
export class RespiratorioComponent implements OnInit{

  formGroup: FormGroup;
  @Output() closeDialogRespiratorio = new EventEmitter();

  constructor(private fb: FormBuilder,
    private respiratorioService: RespiratorioService){

  }

  ngOnInit(): void {
    this.initializeForm();

  }

  public initializeForm(){
    this.formGroup = this.fb.group({
      hasIvasRecente: [false],
      hasDependecia02: [false],
      hasCovid: [false],
      hasTosse: [false],
      hasApneiaSono: [false],
      hasEnfisemia: [false],
      hasAsma: [false],
      hasDispeneia: [false],
      hasCianose: [false],
      hasTuberculose: [false],
      hasOutrasRespiratorio: [false]
    })
  }
  avancar(){
    this.respiratorioService.setRespiratorio(this.formGroup.value);
    this.closeDialogRespiratorio.emit();
  }
}
