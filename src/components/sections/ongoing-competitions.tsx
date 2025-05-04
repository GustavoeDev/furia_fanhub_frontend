import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import competition from "@/assets/esl-challenger.jpg";

export default function OngoingCompetitions() {
  return (
    <div className="bg-[#C49D2B] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pt-6 pb-8 mt-34">
      <div className="max-w-[73rem] mx-auto px-6 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold font-title">
            Campeonatos em andamento
          </h2>
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
          <CarouselPrevious variant="secondary" className="cursor-pointer" />
          <CarouselNext variant="secondary" className="cursor-pointer" />
        </Carousel>
      </div>
    </div>
  );
}
