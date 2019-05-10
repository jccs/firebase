import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  estaAutenticado: boolean;
  usuario: any;
  correo: string;
  clave: string;
  mensaje: string;
  constructor(private servicio: AppService) {
  }

  ngOnInit() {
      if (localStorage.getItem('user')) {
        this.estaAutenticado = true;
      }
  }

  autenticar() {
    this.servicio.autenticar(this.correo, this.clave)
    .then(user => {
      localStorage.setItem('user', user.user.email);
      this.estaAutenticado = true;
    }, error => {
      this.mensaje = 'Verifique sus credenciales';
    });
  }
  cerrarSesion() {
    this.servicio.cerrarSesion();
    this.estaAutenticado = false;
    localStorage.removeItem('user');
  }
}
