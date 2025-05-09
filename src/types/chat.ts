import { Match } from "./match";

export interface Chat {
  id: number;
  created_at: string;
  finished_at: string | null;
  match: Match;
}

export interface APIGetChats {
  chats: Chat[];
}

export interface APIGetChat {
  id: number;
  created_at: string;
  finished_at: string | null;
  match: Match;
}

export interface UpdateChatEvent {
  match_id: number;
  status: "pending" | "ongoing" | "completed" | "cancelled";
}
