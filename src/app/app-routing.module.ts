import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ HomeComponent } from './home/home.component'

import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component'

const routes: Routes = [
  
  {path: 'home', component: HomeComponent},{
    path: 'teste', component: ClienteFormComponent
   }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
