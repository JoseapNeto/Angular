import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
//import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';




@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteListaComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  exports:[
    ClienteFormComponent
  ]
})
export class ClientesModule { }
