import Image from "next/image";

import competition from "@/assets/esl-challenger.jpg";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Game() {
  return (
    <div className="">
      <div className="relative block w-[300px] h-[200px]">
        <Image
          src={competition}
          alt="Foto do campeonato"
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="flex flex-col gap-2 mt-5 font-title">
        <p className="text-xs text-[#C49D2B]">FEBRUARY 24, 2026</p>
        <p className="font-bold text-lg">FURIA X FNATIC</p>
        <Link href="/" className="flex items-center gap-1">
          <p className="font-medium text-[#C49D2B]">Acompanhar partida</p>
          <Play size={14} className="text-[#C49D2B]" />
        </Link>
      </div>
    </div>
  );
}
