/* Auth and User */

import { APISignIn, APISignUp } from "@/types/auth";
import { api } from "./api";
import { SignInData, SignUpData } from "./schemas/auth-schema";
import { APIUpdateUser } from "@/types/user";
import { APIGetChat, APIGetChats } from "@/types/chat";
import { APICreateMessage, APIGetMessages } from "@/types/message";
import { APIGetTeam } from "@/types/match";

export const signIn = async (data: SignInData) => {
  return await api<APISignIn>({
    endpoint: "/accounts/signin/",
    method: "POST",
    withAuth: false,
    data,
  });
};

export const signUp = async (data: SignUpData) => {
  return await api<APISignUp>({
    endpoint: "/accounts/signup/",
    method: "POST",
    withAuth: false,
    data,
  });
};

export const updateUser = async (data: FormData) => {
  return await api<APIUpdateUser>({
    endpoint: "/accounts/me/",
    method: "PUT",
    data,
    withAttachment: true,
  });
};

/* Chats */

export const getChats = async () => {
  return await api<APIGetChats>({
    endpoint: "/chats/",
  });
};

export const getChat = async (match_id: number) => {
  return await api<APIGetChat>({
    endpoint: `/chats/${match_id}/`,
  });
};

/* Messages */

export const getChatMessages = async (chat_id: number) => {
  return await api<APIGetMessages>({
    endpoint: `/chats/messages/${chat_id}/`,
  });
};

export const createChatMessage = async (chat_id: number, message: string) => {
  return await api<APICreateMessage>({
    endpoint: `/chats/messages/${chat_id}/`,
    method: "POST",
    data: { body: message },
  });
};

/* Teams */

export const getTeam = async (team_id: number) => {
  return await api<APIGetTeam>({
    endpoint: `/competitions/teams/${team_id}/`,
  });
};
