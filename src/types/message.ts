import { Chat } from "./chat";
import { User } from "./user";

export interface Message {
  id: number;
  body: string;
  from_user: User;
  created_at: string;
  chat: Chat;
}

export interface APIGetMessages {
  messages: Message[];
}

export interface APICreateMessage {
  message: Message;
}

export interface UpdateMessageEvent {
  message: Message;
  chat_id: number;
}
