import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  
  http: HttpClient;
  
  //(injesao de dependencia) no construtor ele ja instancia
  constructor( http: HttpClient) {
    this.http = http;
   }
//
//
  //Observable(espera um retorno da api)         
   salvar(cliente : Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>('https://localhost:8080/clientes/', cliente);
   }

   editar(cliente : Cliente) : Observable<any>{
    return this.http.put<Cliente>(`https://localhost:8080/clientes/${cliente.id}`, cliente);
   }
  
   getClientes() : Observable<Cliente[]> {
     return this.http.get<Cliente[]>('https://localhost:8080/clientes/');
   }
  
   getClienteById(id: number) : Observable<Cliente>{
    return this.http.get<Cliente>(`https://localhost:8080/clientes/${id}`)
   }

   deletar(id : number) : Observable<any>{
     return this.http.delete<any>(`https://localhost:8080/clientes/${id}`)
   }
}
