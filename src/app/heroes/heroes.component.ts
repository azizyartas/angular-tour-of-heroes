import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  // heroes!: Hero[];
  Heroes: any;
  id!: number;
  name!: string;

  constructor (public heroService: HeroService) { }

  async readHeroes() {
    this.Heroes = await this.heroService.getHeroesByFirebase();
  }

  addHero(id: number, name: string) {
    this.heroService.createHero(id, name);
  }

  ngOnInit() {
    this.readHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //   .subscribe(heroes => this.heroes = heroes);
  // }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }

}
