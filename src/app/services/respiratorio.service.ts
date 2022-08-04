import { Respiratorio } from './../model/respiratorio';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RespiratorioService{

  public respiratorioService$ = new BehaviorSubject<Respiratorio>(new Respiratorio());

  public getRespiratorioService(): Observable<Respiratorio>{
    return this.respiratorioService$.asObservable();
  }
  public setRespiratorio(respiratorio:Respiratorio){
    this.respiratorioService$.next(respiratorio)
  }
}
