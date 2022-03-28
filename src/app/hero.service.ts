import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-hero';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
getHeroes(): Observable<Hero[]> {

  return of(HEROES);
}
getHero(id:number): Observable<Hero> {
 const hero = HEROES.find(h => h.id === id)!;
   this.messageService.add(`HeroService: fetched hero id=${id}`);

  return of(hero);
}
  constructor(private messageService:MessageService) { }
}
