import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower:string = 'manuel';
  nombreUpper:string = 'MANUEL';
  nombreFull:string = 'joSe MANUel SancHEZ';
  fecha:Date = new Date();



}
