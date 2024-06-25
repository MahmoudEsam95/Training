import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { ChatService } from 'src/app/Service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: string = '';
  message: string = '';

  constructor(public chatService: ChatService, private authService: AuthService) { }

  ngOnInit() {
    this.chatService.startConnection();
  }


  sendMessage() {
    const username = localStorage.getItem('login');
    if (username) {
      this.chatService.sendMessage(username, this.message);
    } else {
      console.error('No username found in localStorage.');
    }
    this.message = '';
  }
}



