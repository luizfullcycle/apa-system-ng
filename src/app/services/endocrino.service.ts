import { Endocrino } from './../model/endocrino';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EndocrinoService {

  public endocrinoService$ = new BehaviorSubject<Endocrino>(new Endocrino());

  public getEndocrino(): Observable<Endocrino>{
    return this.endocrinoService$.asObservable();
  }

  public setEndocrino(endocrino: Endocrino){
    this.endocrinoService$.next(endocrino);
  }

}
