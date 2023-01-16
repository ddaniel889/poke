import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { PokemonService } from './service/pokemon.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './service/pokemon/pokemon.component';

const materialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    CommonModule,
    HttpClientModule,
    ...materialModules,
    MatInputModule

  ],
  exports: [
    ...materialModules
  ],
  providers: [ HttpClient, PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
