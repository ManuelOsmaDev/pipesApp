import { NgModule } from '@angular/core';
//primeNg
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNGModule { }
