import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import {AppMaterialModule} from './../app-material/app-material.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteMensajeComponent } from './componente-mensaje/componente-mensaje.component';
import {MensajeRoutingModule} from './mensaje-routing.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ComponenteMensajeComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MensajeRoutingModule
  ]
})
export class MensajeModule { }
