import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AppService} from './../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() EmisorEvento: EventEmitter<any> = new EventEmitter();
  correo: string;
  clave: string;
  mensaje: string;
  constructor(private servicio: AppService) { }

  ngOnInit() {
  }
  autenticar() {
    this.servicio.autenticar(this.correo, this.clave)
    .then(user => {
      localStorage.setItem('user', user.user.email);
      this.EmisorEvento.emit();
    }, error => {
      this.mensaje = 'Ocurrió un error';
    });
  }

}
