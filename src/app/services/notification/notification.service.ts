import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'
interface Notification {
  from: string
  title: string
  message: string
  isRead: boolean
}

@Injectable()
export class NotificationService {

  private _notifications: Notification[]

  private notificationSubject = new Subject<Notification>();
  notification$ = this.notificationSubject.asObservable();

  constructor() { 
    this._notifications = [];
    this.notification$.subscribe(this.onReceiveNotification.bind(this));

    this.send("Author", "Hello", "It's a hello message from author");
  }

  onReceiveNotification(n?: Notification){
    if(n){
      this._notifications.push(n);
    }
  }

  send(from: string, title: string, message: string){
    this.notificationSubject.next({
      from,
      title,
      message,
      isRead: false
    });
  }

  /**
   * Getter and Setter
   */
  get notifications():Notification[] {
    return this._notifications;
  }
}
