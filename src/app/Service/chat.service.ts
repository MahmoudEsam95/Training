import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private hubConnection!: signalR.HubConnection;
  public messages: string[] = [];

  constructor() { }

  public startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44384/chatHub')
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
      })
      .catch(err => {
        console.error('Error while starting connection: ' + err);
      });

    this.hubConnection.on('ReceiveMessage', (username: string, message: string) => {
      const msg = `${username}: ${message}`;
      this.messages.push(msg);
    });

    this.hubConnection.onclose(() => {
      console.log('Connection closed. Attempting to reconnect...');
      setTimeout(() => this.startConnection(), 5000);
    });
  }

  public sendMessage(user: string, message: string) {
    if (this.hubConnection.state === signalR.HubConnectionState.Connected) {
      this.hubConnection.invoke('SendMessage', user, message)
        .catch(err => console.error(err.toString()));
    } else {
      console.error('Cannot send data if the connection is not in the "Connected" State.');
    }
  }
}



