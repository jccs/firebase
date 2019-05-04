import { Component, OnInit } from '@angular/core';

import { Ng2ImgMaxService } from 'ng2-img-max';
import {Observable} from 'rxjs';
import {ServicioMensajeService} from './../servicio-mensaje.service';

@Component({
  selector: 'app-componente-mensaje',
  templateUrl: './componente-mensaje.component.html'
})
export class ComponenteMensajeComponent implements OnInit {
  carpeta: string;
  coleccion: string;
  
  correo: string;
  estaAutenticado:boolean = false;
  imagePath: string;
  imgOriginalURL: string;
  imgURL: string;
  mensaje: string;
  mensajes: Observable<any[]>;
  message: string;
  mimeType: any;
  nombre: string;
  nombreArchivo: string;
  reader: any;
  constructor(private servicio: ServicioMensajeService, 
              private ng2ImgMaxService: Ng2ImgMaxService) { }

  inicializarCampos(){
    this.nombre = '';
    this.mensaje = '';
    this.correo = '';
    this.nombreArchivo = '';
    this.imgURL = null;
    this.imgOriginalURL = null;
  }
  
  ngOnInit() {
    this.inicializarCampos();
    this.coleccion = 'mensajes';
    this.carpeta = 'imagenes';
    this.mensajes = this.servicio.listar(this.coleccion);
  }

  guardar() {
    this.servicio.guardar(this.coleccion,
                          {
                            nombre: this.nombre,
                            correo: this.correo,
                            mensaje: this.mensaje,
                            imagen: this.imgURL,
                            nombreArchivo: this.imgURL === null ? null : this.nombreArchivo
                          }
                          );
    if (this.imgURL !== null) {
      this.servicio.subirArchivo(this.carpeta, this.nombreArchivo,  this.imgOriginalURL);
    }
    
    this.inicializarCampos();
  }

  borrar(id: string, nombreImagen: string) {
    this.servicio.borrar(this.coleccion, id, this.carpeta, nombreImagen);
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
    
    this.ng2ImgMaxService.resize([archivos[0]], 200, 200).subscribe( result => {
        this.reader.readAsDataURL(result);
        this.reader.onload = () => 
        {
          this.imgURL = this.reader.result;
        }
      }
    );
  }

  autenticar(){
    this.estaAutenticado = !this.estaAutenticado;
  }
}
