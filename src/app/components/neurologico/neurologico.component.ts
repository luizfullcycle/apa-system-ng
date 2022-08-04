import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neurologico',
  templateUrl: './neurologico.component.html',
  styleUrls: ['./neurologico.component.scss']
})
export class NeurologicoComponent implements OnInit{
  formGroup: FormGroup;
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
     this.initialize();
  }

  public initialize(){
    this.formGroup = this.fb.group({
      eAve: [null, Validators.required],
      eCefaleia: [null, Validators.required],
      eConvulsoes: [null, Validators.required],
      eDemencias: [null, Validators.required],
      eDesmaios: [null, Validators.required],
      eDormencia: [null, Validators.required],
      eDvp: [null, Validators.required],
      eLesaoMedular: [null, Validators.required],
      eParestesias: [null, Validators.required],
      ePic: [null, Validators.required]
    })
  }

}
