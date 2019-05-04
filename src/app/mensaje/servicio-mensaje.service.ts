import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioMensajeService {
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) {

  }

  listar(coleccion: string) {
    return this.db.list(coleccion).snapshotChanges().pipe(
      map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
    );
  }

  guardar(coleccion: string, objeto: object) {
    this.db.list(coleccion).push(objeto);
  }

  subirArchivo(carpeta: string, nombreArchivo: string, archivo: any) {
    this.storage.ref(carpeta + '/' + nombreArchivo).put(archivo);
  }
  
  borrar(coleccion: string, key: string, carpeta: string, nombreArchivo: string) {
    this.db.list(coleccion).remove(key);
    this.storage.ref(carpeta + '/' + nombreArchivo).delete();
  }
}
