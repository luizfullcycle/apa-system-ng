import { Especialidade } from './../model/especialidade';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class EspecialidadeService {

  constructor(public http: HttpClient){

  }

  public getAllEspecialidades(): Observable<Especialidade[]>{
    return this.http.get<Especialidade[]>(`http://localhost:8083/apa-system/especialidade`)
  }
}
