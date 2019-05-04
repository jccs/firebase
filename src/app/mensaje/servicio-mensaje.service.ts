import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioMensajeService {
  constructor(private db: AngularFireDatabase) {

  }

  listar(coleccion: string) {
    return this.db.list(coleccion).snapshotChanges().pipe(
      map(changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
    );
  }

  guardar(coleccion: string, objeto: object) {
    this.db.list(coleccion).push(objeto);
  }
  
  borrar(coleccion: string, key: string) {
    this.db.list(coleccion).remove(key);
  }
}
