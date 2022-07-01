import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenados',
  templateUrl: './ordenados.component.html',
  styleUrls: ['./ordenados.component.css']
})
export class OrdenadosComponent {
  name: string = 'HECHO'
  enMayuscula:boolean = true;
  ordenarPor:string = '';
  cambioM(){
    this.enMayuscula = !this.enMayuscula
  }
  heroes:Heroe[] =[{
    nombre:'superman',
    vuela: true,
    color:Color.azul
  },
  {
    nombre:'batman',
    vuela: false,
    color:Color.negro
  },
  {
    nombre:'robin',
    vuela: false,
    color:Color.verde
  },
  {
    nombre:'DaredDevil',
    vuela: false,
    color:Color.rojo
  }
]
cambiarOrden(valor:string){
  this.ordenarPor = valor;
}
}
