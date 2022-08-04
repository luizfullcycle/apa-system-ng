import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-neoplasia',
  templateUrl: './neoplasia.component.html',
  styleUrls: [ './neoplasia.component.scss']
})
export class NeoplasiaComponent implements OnInit{
  formGroup: FormGroup;
  @Output() eventNeoplasia = new EventEmitter();
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.formInitialize();
  }

  public formInitialize(){
    this.formGroup = this.fb.group({
      eHormonioterapia: [false],
      eQuimioterapia:[false],
      eRadioterapia:[false],
      eOutros:[false]
     })
  }
  avancar(){
    this.eventNeoplasia.emit();
  }

}
