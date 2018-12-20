import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroesService: HeroService) {
   }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe( heroesTab => {
      this.heroes = heroesTab;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return ; }
    this.heroesService.addHero({ name } as Hero).subscribe(
      hero => this.heroes.push(hero)
    );
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroesService.deleteHero(hero).subscribe();
  }
}
