import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { Pokemon } from '../models/pokemon.model';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item.component';

@Component({
  selector: 'directive-example',
  standalone: true,
  imports: [CommonModule, HighlightDirective, PokemonItemComponent],
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.css'
})
export class DirectiveExampleComponent {
  isMagic = true;
  isRenderable = true;
  pokemon: Array<Pokemon> = [
    { name: 'Pikachu', type: 'Electric', id: 1 },
    { name: 'Bulbasaur', type: 'Grass' },
    { name: 'Charmander', type: 'Fire' },
    { name: 'Squirtle', type: 'Water' }
  ]
}
