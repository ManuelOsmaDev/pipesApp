import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {
//i18nSelect
  nombre:string = "Susuna";
  nombreM:string = "manuel";
  genero:string = "femenino";

  invitacionMap = {
    "masculino":"invitarlo",
    "femenino":"invitarla",
  }
//i18nPlural
    clientes:string[] = ["maria","manuel","juan"];

    clientesMap={
      "=0":"no tenemos nigun",
      "=1":" un cliente esperando",
      "other":" # clientes esperando"
    }

    Borrar(){
      this.clientes.splice(1,1);
    }
    Cambiar(){
      this.nombre = "Manuel";
      this.genero = "masculino";
    }

    //keyValuePipe
    persona={
      persona:"Manuel",
      nacimiento:"bogota",
      age:20
    }
   
}
