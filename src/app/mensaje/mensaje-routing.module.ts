import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponenteMensajeComponent} from './componente-mensaje/componente-mensaje.component';

const routes: Routes = [{
  path: 'mensaje',
  component: ComponenteMensajeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MensajeRoutingModule { }
