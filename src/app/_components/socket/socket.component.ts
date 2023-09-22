import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import { MessagesService } from 'src/app/services/messages.service';
import { MessageData } from 'src/app/_models/message';
@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
})
export class SocketComponent implements OnInit {
  public message: string = '';
  public messages: MessageData[] = [];
  public user: string = '';

  constructor(
    private socketService: SocketService,
    public messageService: MessagesService
  ) {}

  ngOnInit(): void {
    this.initSocketConnection();
  }

  private initSocketConnection(): void {
    this.socketService.socket.on(
      'message',
      (data: { message: string; seenBy: string[] }) => {
        this.messages = data; // Add the message
      }
    );
  }

  public sendMessage(): void {
    if (this.message) {
      const user = new Date().getSeconds() + this.user;
      const messageData = { message: this.message, seenBy: [user] };
      this.messages.push(messageData);
      this.socketService.socket.emit('message', this.messages);
      this.message = '';
    }
  }

  public markAsSeen(messageData: MessageData): void {
    let usersFromStorage: string[] = [];
    const storedUsers = localStorage.getItem('usersWhoMarkedSeen');

    if (storedUsers) {
      usersFromStorage = JSON.parse(storedUsers);
    }

    if (!usersFromStorage.includes(this.user)) {
      usersFromStorage.push(this.user);
      localStorage.setItem(
        'usersWhoMarkedSeen',
        JSON.stringify(usersFromStorage)
      );
    }
    // messageData.seen = true;
    this.messageService.decrementMessageCount();
  }
}
