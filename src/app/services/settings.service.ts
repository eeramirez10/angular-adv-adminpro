import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public tema = document.querySelector('#theme');
  
  
  constructor() { 

 
    let url  = localStorage.getItem('tema') || './assets/css/colors/default-dark.css';
    this.tema.setAttribute('href', url );
  }

  colorTheme (tema){

    let valorTema = tema.getAttribute('data-theme');

    let url = `./assets/css/colors/${valorTema}.css`;

    this.tema.setAttribute('href', url );

    localStorage.setItem('tema', url);
  }
}
