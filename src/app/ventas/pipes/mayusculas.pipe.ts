import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(value:string, arg :boolean = true) {
    return (arg)?  value.toUpperCase():value.toLowerCase()
    }
}
