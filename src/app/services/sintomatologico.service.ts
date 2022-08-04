import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Sistomatologico } from '../model/sistomatologico';

@Injectable({
  providedIn: 'root'
})
export class SintomatologicoService{

  public sistomatologico$ = new BehaviorSubject<Sistomatologico>(new Sistomatologico());

  public getSistematologico():Observable<Sistomatologico>{
    return this.sistomatologico$.asObservable();
  }
  public setSistematologico(sistematologico: Sistomatologico){
    return this.sistomatologico$.next(sistematologico);
  }
}
