import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTelefono'
})
export class FilterTelefonoPipe implements PipeTransform {

  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  transform(lista: any[], texto: string): any[] {
    if (!texto) return lista
    return lista.filter(user => user.phone.toUpperCase().includes(texto.toUpperCase()))

  }
}
