export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export const mockConversations: Conversation[] = [
  {
    id: 'conv-1',
    title: 'How to create component in angular',
    createdAt: new Date('2024-01-15T10:30:00'),
    updatedAt: new Date('2024-01-15T10:45:00'),
    messages: [
      {
        id: 'msg-1',
        content: 'How to create component in angular',
        sender: 'user',
        timestamp: new Date('2024-01-15T10:30:00'),
      },
      {
        id: 'msg-2',
        content:
          'In Angular, you can create a component using the Angular CLI with the command: ng generate component component-name. This will generate the necessary files including the TypeScript class, HTML template, and CSS stylesheet. You can also manually create these files following Angular\'s component structure.',
        sender: 'ai',
        timestamp: new Date('2024-01-15T10:30:30'),
      },
      {
        id: 'msg-3',
        content:
          'What are the key parts of an Angular component?',
        sender: 'user',
        timestamp: new Date('2024-01-15T10:35:00'),
      },
      {
        id: 'msg-4',
        content:
          'An Angular component consists of: 1) Component class with @Component decorator containing metadata like selector, template, and styles. 2) Template file (HTML) defining the component\'s view. 3) Stylesheet (CSS/SCSS) for component-specific styles. 4) Component logic in TypeScript including lifecycle hooks and property binding. Modern Angular also uses signals for state management.',
        sender: 'ai',
        timestamp: new Date('2024-01-15T10:35:30'),
      },
    ],
  },
  {
    id: 'conv-2',
    title: 'Angular routing how it works',
    createdAt: new Date('2024-01-14T14:20:00'),
    updatedAt: new Date('2024-01-14T14:35:00'),
    messages: [
      {
        id: 'msg-5',
        content: 'Angular routing how it works',
        sender: 'user',
        timestamp: new Date('2024-01-14T14:20:00'),
      },
      {
        id: 'msg-6',
        content:
          'Angular routing enables navigation between different components in a single-page application. It uses the RouterModule and Routes array to define the application\'s routing configuration. The router matches the current URL to a route and displays the corresponding component.',
        sender: 'ai',
        timestamp: new Date('2024-01-14T14:20:30'),
      },
    ],
  },
  {
    id: 'conv-3',
    title: 'What is service in angular',
    createdAt: new Date('2024-01-13T09:00:00'),
    updatedAt: new Date('2024-01-13T09:15:00'),
    messages: [
      {
        id: 'msg-7',
        content: 'What is service in angular',
        sender: 'user',
        timestamp: new Date('2024-01-13T09:00:00'),
      },
      {
        id: 'msg-8',
        content:
          'A service in Angular is a class with the @Injectable decorator that provides specific functionality that can be shared across components. Services are typically used for data management, API communication, and other business logic. They follow the single responsibility principle and promote code reusability through dependency injection.',
        sender: 'ai',
        timestamp: new Date('2024-01-13T09:00:45'),
      },
    ],
  },
];
