import {Hero} from './hero';
import {HEROES} from './mock-heroes'
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {

    // 'Normal' speed
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    // Take it slow...
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(()=>resolve(HEROES), 4000)
        );
    }

}