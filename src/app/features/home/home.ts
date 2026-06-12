import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar';
import { InitialStateComponent } from './components/initial-state/initial-state';
import { ConversationThreadComponent } from './components/conversation-thread/conversation-thread';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    InitialStateComponent,
    ConversationThreadComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  private chatService = inject(ChatService);

  currentConversation = this.chatService.getCurrentConversation();
  sidebarExpanded = signal(true);

  toggleSidebar() {
    this.sidebarExpanded.update((v) => !v);
  }
}
