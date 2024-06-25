
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { Subscription } from 'rxjs';
// import { SseService } from '../Service/sse.service';

// @Component({
//   selector: 'app-notification',
//   templateUrl: './notification.component.html',
//   styleUrls: ['./notification.component.css']
// })
// export class NotificationComponent implements OnInit, OnDestroy {
//   messages: string[] = [];
//   newMessage: string = '';
//   private messageSubscription: Subscription | null = null;

//   constructor(private sseService: SseService, private _snackBar: MatSnackBar) { }

//   ngOnInit(): void {
//     this.sseService.connect('http://localhost:5254/api/webhook/notifications');
//     this.messageSubscription = this.sseService.getMessages().subscribe(message => {
//       this.messages.push(message);
//       this.openSnackBar(message, 'New');
//     });
//   }

//   ngOnDestroy(): void {
//     if (this.messageSubscription) {
//       this.messageSubscription.unsubscribe();
//     }
//   }

//   openSnackBar(message: string, action: string) {
//     this._snackBar.open(message, action, {
//       duration: 10000,
//     });
//   }

//   addMessage() {
//     if (this.newMessage) {
//       this.messages.push(this.newMessage);
//       this.openSnackBar(this.newMessage, 'Added');
//       this.newMessage = '';
//     }
//   }
// }
