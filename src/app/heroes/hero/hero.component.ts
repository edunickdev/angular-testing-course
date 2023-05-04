import { name } from './../../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  
  public nickname: string = 'Superman';
  public name: string = 'clark kent';
  public age: number = 30;

  
  public get CapitalizedName() : string {
    return this.name.toUpperCase();
  }

  
  getHeroDescription() : string {
    return `${ this.name } - ${this.age}`;
  }

  changeHero(name: string, nickname: string): void {
    this.name = name;
    this.nickname = nickname;
  }
  
  changeAge(age: number): void{
    this.age = age;
  }
  

}
