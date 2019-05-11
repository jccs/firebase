import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponenteMensajeComponent} from './componente-mensaje/componente-mensaje.component';
import {DetalleComponent} from './detalle/detalle.component';

const routes: Routes = [{
  path: 'mensaje',
  component: ComponenteMensajeComponent,
  children: [
    {
      path: ':id',
      component: DetalleComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MensajeRoutingModule { }
