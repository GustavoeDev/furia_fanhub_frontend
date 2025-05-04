import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import competition from "@/assets/esl-challenger.jpg";

export default function LastMatches() {
  return (
    <div className="flex flex-col gap-8 my-30">
      <div>
        <h2 className="text-2xl font-bold font-title">Últimas partidas</h2>
      </div>
      <Carousel className="mx-14">
        <CarouselContent className="items-stretch min-h-[300px]">
          <CarouselItem className="basis-1/3">
            <div className="relative w-full h-[300px]">
              <Image
                src={competition}
                alt="Foto do campeonato"
                fill
                className="object-cover rounded"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/3">
            <div className="relative w-full h-[300px]">
              <Image
                src={competition}
                alt="Foto do campeonato"
                fill
                className="object-cover rounded"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/3">
            <div className="relative w-full h-[300px]">
              <Image
                src={competition}
                alt="Foto do campeonato"
                fill
                className="object-cover rounded"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/3">
            <div className="relative w-full h-[300px]">
              <Image
                src={competition}
                alt="Foto do campeonato"
                fill
                className="object-cover rounded"
              />
            </div>
          </CarouselItem>

          <CarouselItem className="basis-1/3">
            <div className="relative w-full h-[300px]">
              <Image
                src={competition}
                alt="Foto do campeonato"
                fill
                className="object-cover rounded"
              />
            </div>
          </CarouselItem>
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
