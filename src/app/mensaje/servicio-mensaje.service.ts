import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioMensajeService {

  mensajesRef: AngularFireList<any>;
  
  constructor(db: AngularFireDatabase) {
    this.mensajesRef = db.list('mensajes');
  }
  
  listar(){
    return this.mensajesRef.snapshotChanges().pipe(map(changes =>changes.map(c => ({key: c.payload.key, ...c.payload.val()}))));
  }
  guardar(nombre: string, correo: string, mensaje: string) {
    this.mensajesRef.push({
                            nombre,
                            correo,
                            mensaje});
  }
  borrar(key: string) {
    this.mensajesRef.remove(key);
  }
}
