import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification/notification.service'
@Component({
  selector: 'app-notification',
  template: `
  <ul class="list-group">
    <a *ngFor="let n of notificationService.notifications"  class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{n.title}}</h5>
    </div>
    <p class="mb-1">{{n.message}}</p>
    <small>{{n.from}}</small>
  </a>
  </ul>
  `,
  styles: []
})
export class NotificationComponent implements OnInit {

  constructor(
    protected notificationService: NotificationService
  ) { }

  ngOnInit() {
  }

}
