import { User } from "./user";

export interface Message {
  id: number;
  body: string;
  from_user: User;
  created_at: string;
  chat: number;
}

export type APIGetMessages = Message[];

export interface APICreateMessage {
  body: string;
}

export interface UpdateMessageEvent {
  message: Message;
  chat_id: number;
}
