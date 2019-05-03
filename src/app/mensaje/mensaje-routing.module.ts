import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponenteMensajeComponent} from './componente-mensaje/componente-mensaje.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
    path: 'mensaje',
    component: ComponenteMensajeComponent
  },
  {
    path: 'inicio',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MensajeRoutingModule { }
