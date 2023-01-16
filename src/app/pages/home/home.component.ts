import { Component, OnInit, ViewChild } from '@angular/core';
import {PokemonService } from './../../service/pokemon.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns = ['Name', 'See Pokemon'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  public dataPokemon: any[] = [];
  public pokemon: any = {};
  public table:boolean = false;
  public summary:boolean = false;
  public detail:boolean = false;


  constructor(private pokemonService: PokemonService) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit(): void {
    this.getAll('/pokemon/?limit=1270')
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event:any) {
    let filterValue = event.target.value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getAll(url:string): void {
    this.pokemonService.getPokemon(url).subscribe(response => {
        console.log(response)
        this.dataPokemon = response.results;
        console.log(this.dataPokemon)
        this.dataSource.data = response.results;
        this.table = true;

    });
}

getOnePokemon(name:string): void {
  let route = `/pokemon/${name}`;
  this.pokemonService.getDetail(route).subscribe(response => {
      console.log(response)
      this.detail = true;
      this.pokemon = response;
  });
}

}
