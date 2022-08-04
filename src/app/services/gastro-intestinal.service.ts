import { GastroIntestinal } from './../model/gastro-intestinal';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GastroIntestinalService{

  public gastroIntestinalService$ = new BehaviorSubject<GastroIntestinal>(new GastroIntestinal());

  public getGastroIntestinal(): Observable<GastroIntestinal>{
   return this.gastroIntestinalService$.asObservable();
  }
  public setGastroIntestinal(gastroIntestinal:GastroIntestinal){
     this.gastroIntestinalService$.next(gastroIntestinal)
  }
}
