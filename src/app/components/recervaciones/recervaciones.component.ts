import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { recervacionesLista } from './recervaciones.mock';
import { Recervaciones } from '../../interfaces/recervaciones-inteface';
import { Router } from '@angular/router';
import { ServicioRecervacionesService } from 'src/app/servicio-recervaciones.service';

@Component({
  selector: 'app-recervaciones',
  templateUrl: './recervaciones.component.html',
  styleUrls: ['./recervaciones.component.css']
})
export class RecervacionesComponent {

  recervacionesLista: Recervaciones[] = recervacionesLista;
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private _recervacionService: ServicioRecervacionesService) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', [Validators.required]],
      tipoHabitacion: ['', Validators.required],
      solicitud: ['']
    });
  }

  send(): void {
    //console.log(this.myForm);
    if (this.myForm) {
      this._recervacionService.agregarRecervacion(this.myForm.value, 1);
    } else {
      console.log(this.myForm);
    }
  }
}
