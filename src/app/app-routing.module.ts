import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'getPokemonDetails/:id', component: PokemonDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
