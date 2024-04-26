import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsuario'
})
export class FilterUsuarioPipe implements PipeTransform {

  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  // hacer otra lista con las búsquedas por número y usuario
  // (con número poner toString?) return lista.filter(user => user.phone.toUpperCase().includes(texto.toUpperCase()))
  transform(lista: any[], texto: string): any[] {
    if (!texto) return lista
    return lista.filter(user => user.username.toUpperCase().includes(texto.toUpperCase()))

  }

}
