import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  transform(lista: any[], texto: string): any[] {
    if (!texto) return lista
    // Para que haga el filtro de la lista:
    // return lista.filter(user => user.name.indexOf(texto) > -1) // va más menos
    // return lista.filter(user => user.name.contains())
    return lista.filter(user => user.name.toUpperCase().includes(texto.toUpperCase()))

  }

}
