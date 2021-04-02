import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menu:any[];

  constructor(private _sidebarService: SidebarService, private _usuarioService: UsuarioService){ 

    this.menu = this._sidebarService.menu

    
  }

  ngOnInit(): void {
  }

  logout= ()=> this._usuarioService.logout();

}
