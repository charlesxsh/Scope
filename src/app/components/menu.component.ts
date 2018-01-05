import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string
  routerLink: string
}

@Component({
  selector: 'app-menu',
  template: `
  <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
  <ul class="nav nav-pills flex-column">
    <li *ngFor="let item of menuItems" class="nav-item">
      <a class="nav-link" routerLink={{item.routerLink}}>{{item.name}}</a>
    </li>
  </ul>
  </nav>
  `,
  styles: []
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [
    { name: "Notification", routerLink:"/notification"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
