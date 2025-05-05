"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Game from "../shared/game";
import { useTeamStore } from "@/stores/team-store";
import { useEffect, useState } from "react";
import { Match } from "@/types/match";

export default function LastMatches() {
  const { team } = useTeamStore();
  const [matchesCompleted, setMatchesCompleted] = useState<Match[]>([]);

  useEffect(() => {
    const teamMatch = team.matches?.filter(
      (match) => match.status === "completed"
    );

    if (teamMatch) {
      setMatchesCompleted(teamMatch);
    }
  }, [team]);

  return (
    <div className="flex flex-col gap-8 my-30">
      <div>
        <h2 className="text-2xl font-bold font-title">Últimas partidas</h2>
      </div>
      {matchesCompleted.length > 0 ? (
        <Carousel className="mx-14">
          <CarouselContent className="items-stretch min-h-[300px]">
            {matchesCompleted.slice(0, 5).map((match) => (
              <CarouselItem key={match.id} className="basis-1/3 completed">
                <Game match={match} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="secondary"
            className="bg-[#C49D2B] hover:bg-[#c49e2b93] cursor-pointer"
          />
          <CarouselNext
            variant="secondary"
            className="bg-[#C49D2B] hover:bg-[#c49e2b93] cursor-pointer"
          />
        </Carousel>
      ) : (
        <div>
          <p>Não há partidas finalizadas para mostrar.</p>
        </div>
      )}
    </div>
  );
}
