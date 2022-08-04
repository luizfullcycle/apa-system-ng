import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SintomatologicoService } from 'src/app/services/sintomatologico.service';

@Component({
  selector: 'app-sistomatologico',
  templateUrl: './sistomatologico.component.html',
  styleUrls: ['./sistomatologico.component.scss']
})
export class SistomatologicoComponent implements OnInit{

  formGroup: FormGroup;
  @Output() closeDialogSistematologico = new EventEmitter();
  constructor(private fb: FormBuilder, private sintomatologicoService: SintomatologicoService){

  }
  ngOnInit(): void {
   this.initializeForm();
  }

  public initializeForm(){
    this.formGroup = this.fb.group({
      hasAngioplastia: [false, Validators.required],
      hasAngina: [false, Validators.required],
      hasArritima: [false, Validators.required],
      hasAAA: [false, Validators.required],
      hasEdemaDeMMi: [false, Validators.required],
      hasMarcaPasso: [false, Validators.required],
      hasCarionaripatia: [false, Validators.required],
      hasHipertensao: [false, Validators.required],
      hasPalpitacao: [false, Validators.required],
      hasInfartoMiocardio: [false, Validators.required],
      hasInsuficienciaCardiaca: [false, Validators.required],
      hasValvulopatia: [false, Validators.required]
    })
  }

  avancar(){
    this.sintomatologicoService.setSistematologico(this.formGroup.value)
    this.closeDialogSistematologico.emit();
  }

}
