/**
 * Module
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/**
 * Component
 */
import { AppComponent } from './components/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotificationComponent } from './components/notification.component';
import { MenuComponent } from './components/menu.component'

/**
 * Service
 */
import { NotificationService } from './services/notification/notification.service'
const appRoutes: Routes = [
  {path:'notification', component: NotificationComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotificationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
