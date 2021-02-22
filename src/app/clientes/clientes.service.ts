import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  //emitirCli = new EventEmitter<any>();

  private API = 'http://localhost:3000/usuarios/';
  constructor(
    private http: HttpClient,
    
    
    ){}


 getClientes(){
   return this.http.get<Cliente[]>('http://localhost:3000/usuarios/');
 }

 getCliente(id:string){
  return this.http.get<Cliente>(this.API + id);

 }
 
 postCadastro(cliente:Cliente) {
   return this.http.post<Cliente[]>('http://localhost:3000/usuarios/' , cliente);
   //this.emitirCli.emit(cliente);
  }
    
 deleteCadastro(cliente:Cliente) {
  return this.http.delete<Cliente[]>('http://localhost:3000/usuarios/');
}

}




  

