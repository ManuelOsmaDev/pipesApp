import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'vuela'
})
export class VuelaPipe implements PipeTransform{
    transform(arg :boolean) {
      return (arg)? "vuela": "no vuela"
    }
}
