import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'pessoa'},
  {path: 'pessoa', loadChildren: ()=> import('./components/paciente/paciente.module').then(m => m.PacienteModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
