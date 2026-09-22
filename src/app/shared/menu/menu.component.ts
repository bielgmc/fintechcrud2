import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  itensMenu = [
    {label:"Início", link:""},
    {label:"Clientes", link:"Clientes"},
     {label:"Contas", link:"/contas"},
    {label:"Sobre", link:"/sobre"},
    {label:"Ajuda", link:"/ajuda"}
  ]
}
