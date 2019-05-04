import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AppMaterialModule} from './../app-material/app-material.module';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser/';
import { CommonModule } from '@angular/common';
import { ComponenteMensajeComponent } from './componente-mensaje/componente-mensaje.component';
import { environment } from './../../environments/environment';
import {FormsModule} from '@angular/forms';
import {MensajeRoutingModule} from './mensaje-routing.module';
import { Ng2ImgMaxModule } from 'ng2-img-max';

@NgModule({
  declarations: [ComponenteMensajeComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MensajeRoutingModule,
    Ng2ImgMaxModule
  ]
})
export class MensajeModule { }
