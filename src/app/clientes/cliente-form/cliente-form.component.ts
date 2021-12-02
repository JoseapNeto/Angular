import { Component, OnInit } from '@angular/core';

import{ Cliente } from '../cliente'
import {ClientesService} from '../../clientes.service'
import { error } from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html'
})
export class ClienteFormComponent implements OnInit{

  cliente: Cliente = new Cliente();
  service: ClientesService
  success: boolean = false;
  errors: string[] = [];
  //id : number = 0;
  
  constructor(service: ClientesService,
              private router : Router,
              private activatedRoute : ActivatedRoute)
               {
              this.service = service;
            }
  
  //Preparation
   ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramns => 
                                        this.cliente.id = paramns['id']);
    if(this.cliente.id){
    this.service.getClienteById(this.cliente.id).subscribe
                               (response => this.cliente = response,
                                error =>
                                this.cliente = new Cliente())
                                }else{
                                  this.cliente = new Cliente()
                                }  
                            }   
                                                  
  onSubmit(){
    if(this.cliente.id){
      this.service.editar(this.cliente).subscribe();
      this.router.navigate(['/cliente-lista'])
    }else{
      this.service.salvar(this.cliente)
      .subscribe(response => {
        this.success = true;
        this.router.navigate(['/cliente-lista'])
       }, error => {
        this.errors = error.console.error();
       })
    }
   }
    
   clienteListagem(){
    this.router.navigate(['/cliente-lista'])
   }
  
}
