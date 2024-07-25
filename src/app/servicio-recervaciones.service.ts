import { Injectable } from '@angular/core';
import { Recervaciones } from './interfaces/recervaciones-inteface';
import { recervacionesLista } from './components/recervaciones/recervaciones.mock';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ServicioRecervacionesService {

  recervacionesLista: Recervaciones[] = recervacionesLista;
  
  constructor(private _router: Router) { }

  agregarRecervacion(recervacion: Recervaciones, idTemporal: number){
    this.recervacionesLista.push(recervacion);
    for(let i = 0; i < recervacionesLista.length; i++){
      recervacionesLista[i].id = idTemporal++;
    }
    this._router.navigate(['/inicio']);
  }

  obtenerRecervaciones(): any{
    return this.recervacionesLista;
  }

}
