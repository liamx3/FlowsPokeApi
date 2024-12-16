import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/Pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit{

  pokemons: Pokemon[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  search: any;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemons();
  }


  getPokemons(){
    this.pokemonService.getPokemons().subscribe(
      response => {
        this.pokemons = response.results;
        console.log("you are here" , response);
      }
    )
  }

  goToDetails(url: string): void {
    let id = this.extractIdFromUrl(url);
    console.log('Navigating to details for ID:', id);
    this.router.navigate(['/getPokemonDetails', id]);
  }

  private extractIdFromUrl(url: string) {
    let urlParts = url.split('/');
    return urlParts[urlParts.length - 2]; // retrieving the id
  }

}
