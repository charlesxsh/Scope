# Scope - An angular project framework
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

This template is perfectly fitted for control panel and dashboard. The project is aimed to provide an universal UI for tools like control panel and dashboard.

## Development Guide
Code Structure:
```
...
src/app
  app.module.ts
  -components /* Put all your components in here */
  -services /* Put all your services in here */
...
```
## UI Structure
![](https://github.com/charlesxsh/MarkdownPhotos/blob/master/scope/line.jpg)

## Already Built In:
### Components:
MenuComponent
NavBarComponent

### Services:
NotificationService

## Documentation

### Exmaple: Notification Function
Below is an exmple: how to add notification function to dashboard
#### 1. Create a notification component in components folders (you can use "ng generate component components/notification" or create file by yourself)
```
import { Component, OnInit } from '@angular/core';

@Component({
...
})
export class NotificationComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}

```
#### 2. Create a menu item in app/components/MenuComponent.ts(Built-in)
```
export class MenuComponent implements OnInit {
  
  /**
  * Add your menu item here
  */
  menuItems: MenuItem[] = [
    { name: "Notification", routerLink:"/notification"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
```
#### 3. Add router information to appRoutes array in file app/app.module.ts
The path here should be the same as you defined in menu items previous step
The \'/\' doesn't need here
```
const appRoutes: Routes = [
  {path:'notification', component: NotificationComponent}
];
```


## UI
![](https://github.com/charlesxsh/MarkdownPhotos/blob/master/scope/screenshot.jpg)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
