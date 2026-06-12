import { Injectable, signal } from '@angular/core';
import { Conversation, mockConversations } from '../models/chat.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private conversations = signal<Conversation[]>(mockConversations);
  private currentConversation = signal<Conversation | null>(mockConversations[0]);

  getConversations() {
    return this.conversations.asReadonly();
  }

  getCurrentConversation() {
    return this.currentConversation.asReadonly();
  }

  setCurrentConversation(conversationId: string) {
    const conversation = this.conversations().find((c) => c.id === conversationId);
    if (conversation) {
      this.currentConversation.set(conversation);
    }
  }

  clearCurrentConversation() {
    this.currentConversation.set(null);
  }

  createNewConversation(title: string) {
    const newConversation: Conversation = {
      id: `conv-${Date.now()}`,
      title,
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.conversations.update((conversations) => [
      newConversation,
      ...conversations,
    ]);
    this.currentConversation.set(newConversation);
    return newConversation;
  }
}
