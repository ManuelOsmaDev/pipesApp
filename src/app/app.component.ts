import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipe';
  name:string = 'jose manuel sanchez osma';
  valor:number = 223322;
  constructor(private primengConfig: PrimeNGConfig){};

  ngOnInit(){
    this.primengConfig.ripple = true;
  }
}
