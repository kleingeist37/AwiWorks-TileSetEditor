import { Component, OnInit } from '@angular/core';
import { NavElement } from 'src/app/shared/classes/navelement.class';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navElements: NavElement[] = [
    new NavElement('', undefined , 'home', 'Home'),
    new NavElement('/editor', undefined , 'add_circle', 'New TileSet'),
    new NavElement('/load', undefined , 'edit', 'Edit TileSet'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
