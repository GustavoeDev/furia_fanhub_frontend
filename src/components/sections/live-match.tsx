import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import competition from "@/assets/esl-challenger.jpg";
import Link from "next/link";

export default function LiveMatch() {
  return (
    <div className="flex flex-col gap-8 mb-10">
      <h2 className="text-2xl font-bold">Agora - Ao Vivo</h2>
      <div className="flex items-center max-w-[900px] mx-auto gap-10">
        <Link href="/" className="relative w-[350px] h-[200px]">
          <Image
            src={competition}
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
            Acompanhe cada segundo da ação enquanto a partida se desenrola em
            tempo real
          </h3>
          <p>
            Sinta a adrenalina dos lances decisivos. Acompanhe os comentários
            exclusivos e acompanhe os detalhes que fazem a diferença. Este
            espaço foi criado para que você não perca nenhum momento da emoção.
            Fique conectado e faça parte da energia que move o jogo.
          </p>
        </div>
      </div>
    </div>
  );
}
