import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ServicioMensajeService} from './../servicio-mensaje.service';

@Component({
  selector: 'app-componente-mensaje',
  templateUrl: './componente-mensaje.component.html',
})
export class ComponenteMensajeComponent implements OnInit {
  mensajes: Observable<any[]>;
  nombre: string;
  correo: string;
  mensaje: string;

  constructor(private servicio: ServicioMensajeService) { }

  ngOnInit() {
    this.mensajes = this.servicio.listar();
  }

  guardar() {
    this.servicio.guardar(this.nombre, this.correo, this.mensaje);
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }

  borrar(id: string) {
    this.servicio.borrar(id);
  }

}
