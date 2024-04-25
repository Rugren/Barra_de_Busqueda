import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
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

  constructor(
    private _http: HttpClient
  ) { }

  /*
  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users').subscribe(
    (users: any[]) => this.usuarios = users)
  } */
  
  ngOnInit() {
    this._http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (users: Usuario[]) => this.usuarios = users
    );
  }
  
  // usuarios = []
  usuarios: Usuario[] = [];

}
