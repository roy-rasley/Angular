import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})



export class MovieTableComponent implements OnInit {
title: string = 'Top 5 SuperHeros'
hero1:SuperHero = new SuperHero('Goku','Dragon Ball','Multi-Versal','Dragon Ball Super')
hero2:SuperHero = new SuperHero('Iron Man','Marvel','Island Level','Avengers')
hero3:SuperHero = new SuperHero('Scarlet Witch','Marvel','Reality Warper','Avengers: Age of Ultron')
hero4:SuperHero = new SuperHero('Sonic','Sonic','Multi-Versal','Sonic the HedgeHog')
hero5:SuperHero = new SuperHero('Arceus','Pokemon','Multi-Versal','Arceus and the jewel of life')

superHeroes: SuperHero[] = []


  constructor() { }

  ngOnInit(): void {
    this.superHeroes.push(this.hero1,this.hero2,this.hero3,this.hero4,this.hero5);
  }
}

class SuperHero{
  name: string;
  universe: string;
  powerLevel: string
  movie: string

  constructor(name:string, universe:string, powerLevel:string, movie:string){
    this.name=name;
    this.universe=universe;
    this.powerLevel=powerLevel;
    this.movie = movie;
  }
}


