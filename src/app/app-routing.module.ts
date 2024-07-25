import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecervacionesComponent } from './components/recervaciones/recervaciones.component';



const routes: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'recervacionesForm', component: RecervacionesComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
