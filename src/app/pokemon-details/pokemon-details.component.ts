import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit{

  // pokemon: Pokemon | undefined;
  pokemon: any;

  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    let id: string;  
    this.route.params.subscribe(params => {
      id = params['id'];
      console.log("Fetched ID from params: ", id);
      this.pokemonService.getPokemonsData(id).subscribe(data => {
        this.pokemon = data;
        console.log("Pokemon Details for pokemon with ID: ", id, data);

      })
    });
  }

  backToGetPokemons(): void {
    console.log('Going back to GetPokemons page');
    this.router.navigate(['']);
  }
}
