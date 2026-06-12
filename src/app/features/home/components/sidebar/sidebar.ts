import { Component, inject, signal, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  private chatService = inject(ChatService);
  
  expanded = input(true);
  sidebarToggle = output<void>();

  conversations = this.chatService.getConversations();
  currentConversation = this.chatService.getCurrentConversation();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  onSelectConversation(conversationId: string) {
    this.chatService.setCurrentConversation(conversationId);
  }

  onNewChat() {
    this.chatService.createNewConversation('New Chat');
  }

  onLogout() {
    // TODO: Implement logout logic
    console.log('Logout clicked');
  }
}
