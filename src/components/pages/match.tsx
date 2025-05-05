"use client";

import { createChatMessage, getChat, getChatMessages } from "@/lib/requests";
import { Chat } from "@/types/chat";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import competitionLogo from "@/assets/esl-challenger.jpg";
import { Message, UpdateMessageEvent } from "@/types/message";
import { socket } from "@/lib/socket";

interface MatchProps {
  matchId: string;
}

export default function Match({ matchId }: MatchProps) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<Chat | null>(null);
  const [chatMessages, setChatMessages] = useState<Message[] | null>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChatData = async () => {
      try {
        setLoading(true);
        const response = await getChat(Number(matchId));

        if (response.error || !response.data) {
          throw new Error("Erro ao carregar informações da partida");
        }
        setChat(response.data);
      } catch {
        toast.error("Erro ao carregar informações da partida");
        setChat(null);
      } finally {
        setLoading(false);
      }
    };

    fetchChatData();
  }, [matchId]);

  async function handleGetChatMessages() {
    const response = await getChatMessages(chat?.id ?? 0);

    if (response.error || !response.data) {
      toast.error("Erro ao carregar mensagens da partida");
      return;
    }

    setChatMessages(response.data);
  }

  useEffect(() => {
    handleGetChatMessages();
  }, [chat]);

  async function handleCreateNewMessage(event: React.FormEvent) {
    event.preventDefault();

    const response = await createChatMessage(chat?.id ?? 0, message);

    if (response.error || !response.data) {
      toast.error("Erro ao enviar mensagem");
      return;
    }

    setMessage("");
  }

  useEffect(() => {
    const handleUpdateChatMessage = (data: UpdateMessageEvent) => {
      if (data.chat_id === chat?.id) {
        handleGetChatMessages();
      }
    };

    socket.on("update_chat_message", handleUpdateChatMessage);

    return () => {
      socket.off("update_chat_message", handleUpdateChatMessage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatMessages]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full text-white">
        Carregando informações da partida...
      </div>
    );
  }

  if (!chat) {
    return (
      <div className="flex justify-center items-center h-full text-white">
        Não foi possível carregar as informações da partida
      </div>
    );
  }

  return (
    <div className="flex rounded-lg overflow-hidden mt-12 mb-20 gap-6 bg-[#0A0A0A]">
      <div className="w-full  text-white">
        <div className="flex flex-col items-center bg-[#121212] p-6">
          <Image
            src={chat.match.competition?.logo ?? competitionLogo}
            alt="Competition logo"
            width={200}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">
            {chat.match.competition?.name || "Competition"}
          </h2>
          <p className="text-lg mb-4">{chat.match.competition?.location}</p>
          <p className="text-sm mb-4 text-[#6E6E6E]">
            Data e Hora: {chat.match.start_time}
          </p>
          <div className="flex justify-between items-center mb-4 w-full">
            <div className="flex items-center">
              <Avatar className="h-14 w-14 p-1">
                <AvatarImage
                  src={chat.match.team_1.logo ? chat.match.team_1.logo : ""}
                  alt={chat.match.team_1.name}
                />
                <AvatarFallback className="bg-zinc-700">
                  {chat.match.team_1.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <p className="ml-2 text-lg">{chat.match.team_1?.name}</p>
            </div>
            <p className="text-xl font-bold text-[#C49D2B]">
              {chat.match.score_team_1} x {chat.match.score_team_2}
            </p>
            <div className="flex items-center">
              <p className="mr-2 text-lg">{chat.match.team_2?.name}</p>
              <Avatar className="h-14 w-14 p-1">
                <AvatarImage
                  src={chat.match.team_2.logo ? chat.match.team_2.logo : ""}
                  alt={chat.match.team_2.name}
                />
                <AvatarFallback className="bg-zinc-700">
                  {chat.match.team_2.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm w-full text-[#6E6E6E]">
            <p>Map: {chat.match.map_played}</p>
            <p>Quantidade de Rounds: {chat.match.round_number}</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-6 bg-[#121212] flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto p-4 rounded-lg shadow-md">
          <div className="flex gap-4 flex-col items-end">
            {chatMessages?.map((message) => {
              return (
                <div key={message.id} className="flex items-center gap-2">
                  <div className="bg-[#333333] p-2 rounded-lg max-w-xs">
                    <p className="text-sm text-white">{message.body}</p>
                  </div>
                  <Avatar className="h-8 w-8 p-1">
                    <AvatarImage
                      src={
                        message.from_user.avatar ? message.from_user.avatar : ""
                      }
                      alt={message.from_user.name_user}
                    />
                    <AvatarFallback className="bg-zinc-700">
                      {message.from_user.name_user.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </div>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleCreateNewMessage}
          className="flex items-center mt-4"
        >
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            className="w-full p-2 bg-[#1F1F1F] border border-[#333333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C49D2B]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="ml-2 p-2 bg-[#C49D2B] text-white rounded-lg hover:bg-[#C49D2B] font-semibold cursor-pointer">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
