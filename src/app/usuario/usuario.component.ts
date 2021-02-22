import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from '../clientes/clientes.interface';
import { ClientesService } from '../clientes/clientes.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  //clientesService: any;
  ///cliente!: string;

  cliente!: Cliente;
  

  
  
    constructor(
      private route: ActivatedRoute,
      private clientesService: ClientesService,
      
      
      ) { }

  ngOnInit(){
    const clienteId = this.route.snapshot.paramMap.get('id');
   
    

    this.carregarUsuario(clienteId!);

    console.log(clienteId)
    //this.clientesService.emitirCli.subscribe(

      //( cliente: any) => {
      //  return console.log(cliente);
      }

      carregarUsuario(clienteId:string){
        this.clientesService.getCliente(clienteId)
          .subscribe(
            response => this.onSuccess(response),
            error => this.onError(error),
          );
      }

     

      onSuccess(response:Cliente){
        this.cliente = response;
        console.log(this.cliente)
      }

      onError(response:Cliente) {
        this.cliente = response;
        console.log ('ta errado')
      }

  }


