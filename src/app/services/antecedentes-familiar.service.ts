import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { AntecedentesFamiliares } from "../model/antecedentes-familiares";

   let antecedentesFamiliares = new AntecedentesFamiliares();
@Injectable({
  providedIn: 'root'
})
export class AntecedentesFamiliaresService {

  public antecedentesFamiliares$ = new BehaviorSubject<AntecedentesFamiliares>(antecedentesFamiliares);


  public getAtencedentesFamiliares(): Observable<AntecedentesFamiliares>{
    return this.antecedentesFamiliares$.asObservable();
  }

  public setAtencedentesFamiliares(antecedentesFamiliares: AntecedentesFamiliares){
    this.antecedentesFamiliares$.next(antecedentesFamiliares)
  }

}
