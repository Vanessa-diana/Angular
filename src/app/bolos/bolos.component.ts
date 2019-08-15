import { Component, OnInit } from '@angular/core';
import { BolosService } from './bolos.service';

@Component({
  selector: 'app-bolos',
  templateUrl: './bolos.component.html',
  styleUrls: ['./bolos.component.css']
})
export class BolosComponent implements OnInit {

  ListaBolos: string[];
  nome: string;
  

  constructor(private serviceBolos: BolosService) { 

  this.ListaBolos= serviceBolos.getLista();     
    
  }

  ngOnInit() {
  }

  Inserir(){

    this.ListaBolos.push(this.nome)
    alert("Bolo adicionado");
    this.nome="";
    
  }
}
