import { Component } from '@angular/core';
import { Recervaciones } from 'src/app/interfaces/recervaciones-inteface';
import { recervacionesLista } from '../recervaciones/recervaciones.mock';
import { ServicioRecervacionesService } from 'src/app/servicio-recervaciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(private _recervacionService: ServicioRecervacionesService){}
  recervacionesLista: Recervaciones[] = this._recervacionService.obtenerRecervaciones();

}
