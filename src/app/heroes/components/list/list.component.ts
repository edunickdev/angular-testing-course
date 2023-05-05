import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Superman', 'Batman', 'WonderWoman', 'Green Lantern', 'Blue bettle', 'Supergirl'];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

  addHero(hero: string): void{
    this.heroNames.push(hero);
  }

}
