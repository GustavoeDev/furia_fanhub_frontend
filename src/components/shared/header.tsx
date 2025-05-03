import logo from "@/assets/furia_fanhub_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-2">
      <Image src={logo} alt="Furia FanHub" width={230} height={230} />
      <nav className="flex gap-7 font-semibold">
        <Link
          href="/games"
          className="relative text-white after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-500 hover:after:w-full"
        >
          Todos os jogos
        </Link>
        <Link
          href="/signin"
          className="relative text-white after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-500 hover:after:w-full"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
}
