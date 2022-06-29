import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenadosComponent } from './pages/ordenados/ordenados.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [

    NumerosComponent,
       NoComunesComponent,
       BasicosComponent,
       OrdenadosComponent
  ],
  exports:[
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ]
})
export class VentasModule { }