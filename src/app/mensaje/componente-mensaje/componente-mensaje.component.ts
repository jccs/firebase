import { Component, OnInit } from '@angular/core';

import { Ng2ImgMaxService } from 'ng2-img-max';
import {Observable} from 'rxjs';
import {AppService} from './../../app.service';

@Component({
  selector: 'app-componente-mensaje',
  templateUrl: './componente-mensaje.component.html'
})
export class ComponenteMensajeComponent implements OnInit {

  coleccion: string;
  carpeta: string;


  correo: string;
  nombreArchivo: string;
  imagePath: string;
  imgURL: string;
  imgOriginalURL: any;
  mensaje: string;
  mensajes: Observable<any[]>;
  mimeType: any;
  nombre: string;
  reader: any;
  constructor(private servicio: AppService, private ng2ImgMaxService: Ng2ImgMaxService) { }
  inicializarCampos() {
    this.nombre = '';
    this.correo = '';
    this.nombreArchivo = '';
    this.mensaje = '';
    this.imgURL = null;
    this.imgOriginalURL = null;
  }
  ngOnInit() {
    this.coleccion = 'mensajes';
    this.carpeta = 'imagenes';
    this.inicializarCampos();
    this.mensajes = this.servicio.listar(this.coleccion);
  }
  guardar() {
    this.servicio.guardar(
      this.coleccion,
      {nombre: this.nombre,
       correo: this.correo,
       mensaje: this.mensaje,
       imagen: this.imgURL,
       nombreArchivo: this.imgURL === null ? null : this.nombreArchivo
      });
    if (this.imgURL !== null) {
      this.servicio.subirArchivo(this.carpeta, this.nombreArchivo, this.imgOriginalURL);
    }

    this.inicializarCampos();
  }
  borrar(id: string) {
    this.servicio.borrar(this.coleccion, id);
  }
  obtenerNombre(archivo: any) {
    return String(Date.now()) + '.' + archivo.name.split('.').pop();
  }
  leerImagen(archivos: any) {
    if (archivos.length === 0) {
      return;
    }
    this.mimeType = archivos[0].type;

    this.reader = new FileReader();
    this.imagePath = archivos;

    this.imgOriginalURL = archivos[0];
    this.nombreArchivo = this.obtenerNombre(archivos[0]);

    this.ng2ImgMaxService.resize([archivos[0]], 200, 200)
    .subscribe(result => {
      this.reader.readAsDataURL(result);
      this.reader.onload = () => {
        this.imgURL = this.reader.result;
      };
    });
  }
}
