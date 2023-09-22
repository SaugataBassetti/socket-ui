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
      (data: { message: string; user: string; seenBy: string[] }) => {
        this.messages = data as any; // Add the message
      }
    );
  }

  public sendMessage(): void {
    if (this.message) {
      const user = this.user;
      const messageData = { message: this.message, user: user, seenBy: [user] };
      this.messages.push(messageData);
      this.socketService.socket.emit('message', this.messages);
      this.message = '';
    }
  }

  public markAsSeen(messageData: MessageData, seenBy: string): void {
    if (seenBy.length) {
      if (!messageData.seenBy.includes(seenBy)) {
        messageData.seenBy.push(seenBy);
        const messageSeenData = {
          message: messageData.message,
          user: messageData.user,
          seenBy: messageData,
        };
        this.socketService.socket.emit('message', messageSeenData);
        this.messageService.decrementMessageCount();
      } else {
        alert('user Has already seen the Message');
      }
    } else {
      alert('enter user name');
    }
  }
}
