import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero ;

  heroes: Hero[];

  constructor(private heroesService: HeroService) {
   }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {this.selectedHero = hero; }

  getHeroes() {
    this.heroesService.getHeroes().subscribe( heroesTab => {
      this.heroes = heroesTab;
    });
  }

}
