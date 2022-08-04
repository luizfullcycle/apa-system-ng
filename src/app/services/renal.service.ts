import { Renal } from './../model/renal';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RenalService{

  public renalService$ = new BehaviorSubject<Renal>(new Renal());

  public getRenalService(): Observable<Renal>{
    return this.renalService$.asObservable();
  }

  public setRenalService(renal: Renal){
    this.renalService$.next(renal)
  }
}
