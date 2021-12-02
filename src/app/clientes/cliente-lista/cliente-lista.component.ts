import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html'
})
export class ClienteListaComponent implements OnInit {

  cliente : Cliente[] = [];
  clienteSelecionado : Cliente = new Cliente();
  


  constructor(private service: ClientesService, private router : Router, 
                                private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service
    .getClientes().subscribe(resposta => this.cliente = resposta);
  }

  NovoCadastro(){
    this.router.navigate(['/cliente-form'])
  }

 deletarCliente(id : number){
    this.service.getClienteById(id).subscribe(response => this.clienteSelecionado = response);
    //this.clienteSelecionado = cliente;
    //console.log(this.clienteSelecionado)
    this.service.deletar(id).subscribe(response => this.ngOnInit());
  }
  



}
