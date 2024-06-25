import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseService {
  private eventSource!: EventSource;
  private messageSubject = new Subject<string>();

  constructor(private ngZone: NgZone) { }

  connect(url: string): void {
    this.eventSource = new EventSource(url);

    this.eventSource.onmessage = (event) => {
      this.ngZone.run(() => {
        const message = event.data;
        this.messageSubject.next(message);
      });
    };

    this.eventSource.onerror = (error) => {
      console.error('EventSource error: ', error);
      this.eventSource.close();
    };
  }

  getMessages() {
    return this.messageSubject.asObservable();
  }
}
