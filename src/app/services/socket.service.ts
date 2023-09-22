import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { MessagesService } from './messages.service';
@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private SERVER_URL = 'http://localhost:3000'; // Replace with your server URL
  socket: Socket;

  constructor(private messageService: MessagesService) {
    this.socket = io(this.SERVER_URL);
    // this.socket.on('connect', () => {});

    // this.socket.on('disconnect', () => {});

    // this.socket.on('error', (error) => {
    //   console.error('Socket error:', error);
    // });
    this.socket.on('message', (data) => {
      this.messageService.incrementMessageCount();
    });
  }
}
