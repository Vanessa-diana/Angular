import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BolosService {

  

  constructor() { }


 getLista(){

  return ['Cenoura com Chocolate', 'Chocolate', 'Fubá com Goiabada', 'Churros '];
  }


}