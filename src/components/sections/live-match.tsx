import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import { useEffect } from "react";
import { useTeamStore } from "@/stores/team-store";

import dayjs from "dayjs";

import competition from "@/assets/auth-banner.png";

export default function LiveMatch() {
  const { team } = useTeamStore();

  useEffect(() => {
    dayjs.locale("pt-br");
  }, [team]);

  const ongoingMatch = team.matches?.find(
    (match) => match.status === "ongoing"
  );

  console.log(ongoingMatch);

  return (
    <>
      {!ongoingMatch ? (
        <div className="flex flex-col gap-8 mb-10">
          <h2 className="text-2xl font-bold font-title">Agora - Ao Vivo</h2>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center">Não há jogos ao vivo no momento.</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8 mb-10">
          <h2 className="text-2xl font-bold font-title">Agora - Ao Vivo</h2>
          <div className="flex items-center max-w-[900px] mx-auto gap-10">
            <Link href="/" className="relative w-[350px] h-[200px]">
              <Image
                src={
                  ongoingMatch.competition.logo
                    ? ongoingMatch.competition.logo
                    : competition
                }
                alt="Foto do campeonato"
                fill
                className="object-cover rounded"
              />
              <Badge
                variant="default"
                className="absolute top-2 left-2 z-50 text-white bg-red-500 font-semibold text-sm"
              >
                Ao vivo
              </Badge>
            </Link>

            <div className="flex flex-col max-w-[500px] gap-4">
              <h3 className="text-xl font-semibold">
                Acompanhe cada segundo da ação enquanto a partida se desenrola
                em tempo real
              </h3>
              <p>
                Sinta a adrenalina dos lances decisivos. Acompanhe os
                comentários exclusivos e acompanhe os detalhes que fazem a
                diferença. Este espaço foi criado para que você não perca nenhum
                momento da emoção. Fique conectado e faça parte da energia que
                move o jogo.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
