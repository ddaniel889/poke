import { Component, OnInit, ViewChild } from '@angular/core';
import {PokemonService } from './../../service/pokemon.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myControl = new FormControl('');
  options: any[] = [];
  filteredOptions!: Observable<any[]>;

  public displayedColumns = ['Name', 'See Pokemon'];
  public dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  public dataPokemon: any;
  public pokemon: any = {};
  public table:boolean = false;
  public summary:boolean = false;
  public detail:boolean = false;
  public filterValue:string = '';
  public startA:number = 0;
  public startB:number = 0;
  public startC:number = 0;
  public startD:number = 0;
  public startE:number = 0;
  public startF:number = 0;
  public startG:number = 0;
  public startH:number = 0;
  public startI:number = 0;
  public startJ:number = 0;
  public startK:number = 0;
  public startL:number = 0;
  public startM:number = 0;
  public startN:number = 0;
  public startN_:number = 0;
  public startO:number = 0;
  public startP:number = 0;
  public startQ:number = 0;
  public startR:number = 0;
  public startS:number = 0;
  public startT:number = 0;
  public startU:number = 0;
  public startV:number = 0;
  public startW:number = 0;
  public startX:number = 0;
  public startY:number = 0;
  public startZ:number = 0;


  constructor(private pokemonService: PokemonService) {
    this.dataSource = new MatTableDataSource();
   }

  ngOnInit(): void {
    this.getAll('/pokemon/?limit=1270');
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: any): string[] {
    this.filterValue = this.filterValue.trim();
    this.filterValue = value.toLowerCase();
    this.dataSource.filter = this.filterValue;
    return this.options.filter(option => option.name.toLowerCase().includes(this.filterValue));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  public getAll(url:string): void {
    this.pokemonService.getPokemon(url).subscribe(response => {
        this.dataPokemon = response.results;
        console.log(this.dataPokemon)
        this.dataSource.data = response.results;
        this.table = true;
        this.summaryPokemon(this.dataPokemon);
        this.options = response.results;//['One', 'Two', 'Three'];
    });
}


public getOnePokemon(name:string): void {
  const route = `/pokemon/${name}`;
  this.pokemonService.getDetail(route).subscribe(response => {
      console.log(response)
      this.detail = true;
      this.pokemon = response;
  });
}

private summaryPokemon(arrayPokemon:any): void {
  let counterA = 0;
  let counterB = 0;
  let counterC = 0;
  let counterD = 0;
  let counterE = 0;
  let counterF = 0;
  let counterG = 0;
  let counterH = 0;
  let counterI = 0;
  let counterJ = 0;
  let counterK = 0;
  let counterL = 0;
  let counterM = 0;
  let counterN = 0;
  let counterÑ = 0;
  let counterO = 0;
  let counterP = 0;
  let counterQ = 0;
  let counterR = 0;
  let counterS = 0;
  let counterT = 0;
  let counterU = 0;
  let counterV = 0;
  let counterW = 0;
  let counterX = 0;
  let counterY = 0;
  let counterZ = 0;
  for (const key in  arrayPokemon) {
    if(arrayPokemon[key].name.startsWith('a')){
      counterA += 1;
      this.startA = counterA;
     }
     if(arrayPokemon[key].name.startsWith('b')){
      counterB += 1;
      this.startB = counterB;
     }
     if(arrayPokemon[key].name.startsWith('c')){
      counterC += 1;
      this.startC = counterC;
     }
     if(arrayPokemon[key].name.startsWith('d')){
      counterD += 1;
      this.startD = counterD;
     }
     if(arrayPokemon[key].name.startsWith('e')){
      counterE += 1;
      this.startE = counterE;
     }
     if(arrayPokemon[key].name.startsWith('f')){
      counterF += 1;
      this.startF = counterF;
     }
     if(arrayPokemon[key].name.startsWith('g')){
      counterG += 1;
      this.startG = counterG;
     }
     if(arrayPokemon[key].name.startsWith('h')){
      counterH += 1;
      this.startH = counterH;
     }
     if(arrayPokemon[key].name.startsWith('i')){
      counterI += 1;
      this.startI = counterI;
     }
     if(arrayPokemon[key].name.startsWith('j')){
      counterJ += 1;
      this.startJ = counterJ;
     }
     if(arrayPokemon[key].name.startsWith('k')){
      counterK += 1;
      this.startK = counterK;
     }
     if(arrayPokemon[key].name.startsWith('l')){
      counterL += 1;
      this.startL = counterL;
     }
     if(arrayPokemon[key].name.startsWith('m')){
      counterM += 1;
      this.startM = counterM;
     }
     if(arrayPokemon[key].name.startsWith('n')){
      counterN += 1;
      this.startN = counterN;
     }
     if(arrayPokemon[key].name.startsWith('ñ')){
      counterÑ += 1;
      this.startN_ = counterÑ;
     }
     if(arrayPokemon[key].name.startsWith('o')){
      counterO += 1;
      this.startO = counterO;
     }
     if(arrayPokemon[key].name.startsWith('p')){
      counterP += 1;
      this.startP = counterP;
     }
     if(arrayPokemon[key].name.startsWith('q')){
      counterQ += 1;
      this.startQ = counterQ;
     }
     if(arrayPokemon[key].name.startsWith('r')){
      counterR += 1;
      this.startR = counterR;
     }
     if(arrayPokemon[key].name.startsWith('s')){
      counterS += 1;
      this.startS = counterS;
     }
     if(arrayPokemon[key].name.startsWith('t')){
      counterT += 1;
      this.startT = counterT;
     }
     if(arrayPokemon[key].name.startsWith('u')){
      counterU += 1;
      this.startU = counterU;
     }
     if(arrayPokemon[key].name.startsWith('v')){
      counterV += 1;
      this.startV = counterV;
     }
     if(arrayPokemon[key].name.startsWith('w')){
      counterW += 1;
      this.startW = counterW;
     }
     if(arrayPokemon[key].name.startsWith('x')){
      counterX += 1;
      this.startX = counterX;
     }
     if(arrayPokemon[key].name.startsWith('y')){
      counterY += 1;
      this.startY = counterY;
     }
     if(arrayPokemon[key].name.startsWith('z')){
      counterZ += 1;
      this.startZ = counterZ;
     }


  }
}

}
