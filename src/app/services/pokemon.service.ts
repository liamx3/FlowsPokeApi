import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }


  getPokemons(): Observable<any>{
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=50");
  }

  getPokemonsData(id: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`); //USE ` FOR ID!!!!
  }
}
