import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  tema:Element = document.querySelector('#theme');
  selectorsArray:Element[];
 
  constructor(private _settingsServices:SettingsService){ 

   
  }

  ngOnInit(): void {
    this.selectorsArray = Array.from(document.querySelectorAll('.selector')) ;
  }

  colorTheme(tema){
    this._settingsServices.colorTheme(tema);

    this.agregaWorking(tema)  
  }

  agregaWorking(tema){
    for(let selector of this.selectorsArray){
      if(selector.classList.contains('working')){
        selector.classList.remove('working');
      }
      tema.classList.add('working');
    }
  }

}
