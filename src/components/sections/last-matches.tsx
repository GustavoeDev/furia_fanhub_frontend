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

export default function LastMatches() {
  const { team } = useTeamStore();

  return (
    <div className="flex flex-col gap-8 my-30">
      <div>
        <h2 className="text-2xl font-bold font-title">Últimas partidas</h2>
      </div>
      <Carousel className="mx-14">
        <CarouselContent className="items-stretch min-h-[300px]">
          {team.matches?.slice(0, 5).map((match) => {
            return (
              <CarouselItem key={match.id} className="basis-1/3">
                <Game match={match} />
              </CarouselItem>
            );
          })}
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
    </div>
  );
}
