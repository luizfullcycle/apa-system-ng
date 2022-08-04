import { EndocrinoService } from './../../services/endocrino.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-endocrino',
  templateUrl: './endocrino.component.html',
  styleUrls: ['./endocrino.component.scss']
})
export class EndocrinoComponent implements OnInit{

  @Output() eventCloseDialog = new EventEmitter();
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private endocrinoService: EndocrinoService){

  }
  ngOnInit(): void {
    this.initializeForm();

  }
  public initializeForm(){
    this.formGroup = this.fb.group({
      hasDiabeteTipoIII: [false],
      hasDoencaTireoide: [false],
      hasReposicaoHormonal:[false],
      hasOutrosEndocrino:[false]
    })
  }
  avancar(){
  this.endocrinoService.setEndocrino(this.formGroup.value)
  this.eventCloseDialog.emit();
  }
}
