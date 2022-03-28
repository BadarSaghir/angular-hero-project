import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] =[]
  selectedHero?: Hero;




  constructor( private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  private getHeroes() {
    this.heroService.getHeroes().subscribe(
      heros => this.heroes = heros
    );
  }

  // onSelect(hero:Hero):void{

  // }

}


