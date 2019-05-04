import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ServicioMensajeService} from './../servicio-mensaje.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-componente-mensaje',
  templateUrl: './componente-mensaje.component.html'
})
export class ComponenteMensajeComponent implements OnInit {
  mensajes: Observable<any[]>;
  coleccion: string;
  nombre: string;
  correo: string;
  mensaje: string;
  message: string;
  imagePath: string;
  imgURL: string;
  mimeType: any;
  reader: any;
  constructor(private servicio: ServicioMensajeService) { }

  inicializarCampos(){
    this.nombre = '';
    this.mensaje = '';
    this.correo = '';
    this.imgURL = null;
  }
  ngOnInit() {
    this.inicializarCampos();
    this.coleccion = 'mensajes';
    this.mensajes = this.servicio.listar(this.coleccion);
  }
  guardar() {
    this.servicio.guardar(this.coleccion,
                          {nombre: this.nombre,
                           correo: this.correo,
                           mensaje: this.mensaje,
                           imagen: this.imgURL}
                          );
    this.inicializarCampos();
  }
  borrar(id: string) {
    this.servicio.borrar(this.coleccion, id);
  }
  preview(files) {
    if (files.length === 0) {
      return;
    }
    this.mimeType = files[0].type;
    if (this.mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    this.reader = new FileReader();
    this.imagePath = files;
    this.reader.readAsDataURL(files[0]);
    this.reader.onload = () => {
      this.imgURL = this.reader.result;
    }
  }
}
