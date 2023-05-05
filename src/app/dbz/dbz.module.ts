import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { AddPersonajesComponent } from './components/add-personajes/add-personajes.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListaPersonajesComponent,
    AddPersonajesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DBZModule { }
