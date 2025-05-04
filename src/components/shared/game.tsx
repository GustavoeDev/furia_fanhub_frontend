import Image from "next/image";

import competition from "@/assets/esl-challenger.jpg";
import Link from "next/link";
import { Play } from "lucide-react";
import { Match } from "@/types/match";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useEffect } from "react";

interface GameProps {
  match: Match;
}

export default function Game({ match }: GameProps) {
  useEffect(() => {
    dayjs.locale("pt-br");
  }, []);

  const day = dayjs(match.start_time, "YYYY-MM-DD HH:mm:ss").format("DD");
  const month = dayjs(match.start_time, "YYYY-MM-DD HH:mm:ss").format("MMM");
  const year = dayjs(match.start_time, "YYYY-MM-DD HH:mm:ss").format("YYYY");

  return (
    <div className="">
      <div className="relative w-full h-[300px]">
        <Image
          src={match.competition.logo ?? competition}
          alt="Foto do campeonato"
          fill
          className="object-contain rounded"
        />
      </div>
      <div className="flex flex-col gap-2 mt-5 font-title">
        <p className="text-xs text-[#C49D2B]">
          {day} {month}, {year}
        </p>
        <p className="font-bold text-lg">
          {match.team_1.name} X {match.team_2.name}
        </p>
        <Link href="/" className="flex items-center gap-1">
          <p className="font-medium text-[#C49D2B]">Acompanhar partida</p>
          <Play size={14} className="text-[#C49D2B]" />
        </Link>
      </div>
    </div>
  );
}
