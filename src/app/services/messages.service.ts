import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageData } from '../_models/message';
@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages: MessageData[] = [];
  private messageCountSubject = new BehaviorSubject<number>(0);
  messageCount$ = this.messageCountSubject.asObservable();

  constructor() {}

  getMessages(): MessageData[] {
    return this.messages;
  }

  //   addMessage(message: string, user: string) {
  //     this.messages.push({ message, user, seen: false });
  //   }

  incrementMessageCount() {
    const currentCount = this.messageCountSubject.value;
    this.messageCountSubject.next(currentCount + 1);
  }

  markMessageAsSeen(index: number) {
    if (index >= 0 && index < this.messages.length) {
      this.messages[index].seen = true;
      this.decrementMessageCount();
    }
  }

  decrementMessageCount() {
    const currentCount = this.messageCountSubject.value;
    if (currentCount > 0) {
      this.messageCountSubject.next(currentCount - 1);
    }
  }
}
