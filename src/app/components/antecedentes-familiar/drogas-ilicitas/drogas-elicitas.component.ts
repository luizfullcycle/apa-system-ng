import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drogas-elicitas',
  templateUrl: './drogas-elicitas.component.html',
  styleUrls: ['./drogas-elicitas.component.scss']
})
export class DrogasElicitasComponent implements OnInit{
  formGroup: FormGroup;
  @Output() eventDrogasElicitas = new EventEmitter();
  ngOnInit(): void {
    this.initializeForm();
  }
  constructor(private fb: FormBuilder){

  }

  public initializeForm(){
    this.formGroup = this.fb.group({
      usaDrogaIlicita: [1, Validators.required],
      tempoDrogaIlicita: [null]
    })
  }

  get usaDroga(){
    return this.formGroup.get('usaDrogaIlicita')?.value == '1' ? true : false;
  }

}
