import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conversation } from '../../models/chat.model';

@Component({
  selector: 'app-conversation-thread',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversation-thread.html',
  styleUrl: './conversation-thread.scss',
})
export class ConversationThreadComponent {
  conversation = input<Conversation | null>(null);

  formatTime(date: Date) {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
