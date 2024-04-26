import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string; // Cambiado a string ya que el campo phone en el endpoint proporcionado es un string
  website: string;
  // Definir las propiedades según la estructura de los datos que tiene el enlace: https://jsonplaceholder.typicode.com/users
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  // title = 'Search';

  handleSearch(value: string) {
    console.log(value); // para ver por consola todo lo que escribimos
    this.filtro_valor = value
  }

  filtro_valor = ''

  // No necesario hacer otro para buscar por usuarios, hecho en el mismo handleSearch
  /* handleSearchUsuario(value: string) {
    console.log(value); // para ver por consola todo lo que escribimos
    this.filtroUsuario = value
  }

  filtroUsuario = '' */

  constructor(
    private _http: HttpClient
  ) { }

  /* Así al principio (creo que no iba)
  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(
    (users: any[]) => this.usuarios = users)
  } */
  
  /* Así como lo tenía bien (pero hecho más abajo los 2 juntos)
  ngOnInit() {
    this._http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (users: Usuario[]) => this.usuarios = users); */

  /*
      // Aquí hecho en otro apartado (no comprobado que funcione)
      this._http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users').subscribe(
        (users: Usuario[]) => this.username = users);
  } */

  ngOnInit() {
    this._http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (users: Usuario[]) => {
        this.usuarios = users;
        this.username = users; // No se necesitan dos arreglos separados, se puede usar usuarios para ambos propósitos de búsqueda
      }
    );
  }
  
  // usuarios = []
  usuarios: Usuario[] = [];

  username: Usuario[] = [];
  // username: Usuario[] | undefined;

  

}
