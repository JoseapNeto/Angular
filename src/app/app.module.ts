import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import {HomeComponent } from './home/home.component'


import { TemplateModule } from './template/template.module'
import {ClientesModule} from './clientes/clientes.module'
import { AppRoutingModule } from './app-routing.module';

import { ClientesService } from './clientes.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule

  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
