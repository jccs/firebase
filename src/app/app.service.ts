import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  mensajesRef: AngularFireList<any>;
  constructor(private authenticator: AngularFireAuth, private db: AngularFireDatabase, private storage: AngularFireStorage) {

  }
  autenticar(correo: string, clave: string) {
    return this.authenticator.auth.signInWithEmailAndPassword(correo, clave);
  }
  cerrarSesion() {
    this.authenticator.auth.signOut();
  }
  verficarSesion() {
    return this.authenticator.auth;
  }

  listar(coleccion: string) {
    return this.db.list(coleccion).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val()})))
    );
  }
  guardar(coleccion: string, objeto: object) {
    this.db.list(coleccion).push(objeto);
  }
  subirArchivo(carpeta: string, nombreArchivo: string, archivo: any) {
    this.storage.ref(carpeta + '/' + nombreArchivo).put(archivo);
  }
  borrar(coleccion: string, key: string) {
    this.db.list(coleccion).remove(key);
  }
}
