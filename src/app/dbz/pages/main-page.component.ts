import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";



@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})
export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'Piccolo',
      power: 4500
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Yamcha',
      power: 1500
    }
  ];

}
