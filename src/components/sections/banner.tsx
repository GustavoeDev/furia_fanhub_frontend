import Image from "next/image";

import logo from "@/assets/banner_background.png";
import Link from "next/link";

export default function BannerMain() {
  return (
    <div className="relative w-full h-[450px] my-8">
      <div className="absolute right-0 top-0 w-[800px] max-md:w-[600px] max-sm:w-[500px] h-full">
        <Image src={logo} alt="Banner" fill className="object-contain" />
      </div>
      <div className="absolute inset-0 max-w-[400px] flex flex-col gap-4 items-start h-full justify-center">
        <h1 className="text-3xl font-title">FURIA: A revolução dos eSports</h1>
        <p className="text-lg">
          Acompanhe as partidas da FURIA em tempo real, entre nos chats
          exclusivos dos jogos e apoie nossa equipe. Viva a experiência de
          torcer junto com a comunidade, como se estivesse no estádio!
        </p>
        <Link
          href="/games"
          className="bg-[#C49D2B] font-semibold cursor-pointer mt-2 py-4 px-6 text-lg rounded-tl-xl rounded-br-xl"
        >
          Acompanhe nossos jogos
        </Link>
      </div>
    </div>
  );
}
