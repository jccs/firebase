import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AppService} from './../../app.service';
import {MatDialog} from '@angular/material';
import {PasswordRecoveryComponent} from './../password-recovery/password-recovery.component';
import {SignupComponent} from './../signup/signup.component';

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
  constructor(private servicio: AppService,
              private dialog: MatDialog) { }

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
  mostrarDialog(componente: string) {
    if ( componente === 'signup' ) {
      this.dialog.open(SignupComponent, {
        width: '400px'
      });
    } else {
      if ( componente === 'passwordRecovery' ) {
        this.dialog.open(PasswordRecoveryComponent, {
          width: '400px'
        });
      }
    }
  }

}
