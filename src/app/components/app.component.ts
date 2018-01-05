import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
      <app-nav-bar></app-nav-bar>
      <div class="container-fluid">
        <div class="row">
          <app-menu></app-menu>
          <main role="main" class="col-sm-9 ml-sm-auto col-md-10 pt-3">
            <router-outlet></router-outlet>
          </main>
        </div>
      </div>

  `,
  styles:[]
})
export class AppComponent {
  title = 'app';
}
