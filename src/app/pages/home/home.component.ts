import { Component, OnInit } from '@angular/core';
import {PokemonService } from './../../service/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dataPokemon: any[] = [];
  public table:boolean = false;
  public summary:boolean = false;
  public detail:boolean = false;


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAll('/pokemon/?limit=1270')
  }

  getAll(url:string): void {
    this.pokemonService.getPokemon(url).subscribe(response => {
        console.log(response)
        this.table = true;
        this.dataPokemon = response.results;
        console.log(this.dataPokemon)
    });
}

getOnePokemon(name:string): void {
  let route = `/pokemon/${name}`;
  this.pokemonService.getDetail(route).subscribe(response => {
      console.log(response)
  });
}

}
