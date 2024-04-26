import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTelefono'
})
export class FilterTelefonoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
