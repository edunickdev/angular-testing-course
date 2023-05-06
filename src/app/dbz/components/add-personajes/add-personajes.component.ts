import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { name } from '@leichtgewicht/ip-codec/types';

@Component({
  selector: 'dbz-add-personajes',
  templateUrl: './add-personajes.component.html',
  styleUrls: ['./add-personajes.component.css']
})
export class AddPersonajesComponent {

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void{
    console.log(this.character);

    this.character.name = '';
    this.character.power = 0;
    
  }

}
