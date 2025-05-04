"use client";

import logo from "@/assets/furia_fanhub_logo.png";
import { handleSignOut } from "@/lib/server/auth";
import { User } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setUser(user);
  }, []);

  function handleSignOutLocalStorage() {
    localStorage.removeItem("user");
  }

  return (
    <header className="relative flex items-center justify-between py-2">
      <Link href="/">
        <Image src={logo} alt="Furia FanHub" width={200} height={230} />
      </Link>
      <nav className="flex gap-7 font-semibold">
        <Link
          href="/games"
          className="relative text-white after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-500 hover:after:w-full"
        >
          Todos os jogos
        </Link>

        {user ? (
          <>
            <Link
              href="/update-user"
              className="relative text-white after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-500 hover:after:w-full"
            >
              Editar perfil
            </Link>
            <form action={handleSignOut}>
              <button
                type="submit"
                className="relative text-white after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-500 hover:after:w-full cursor-pointer"
                onClick={handleSignOutLocalStorage}
              >
                Sair
              </button>
            </form>
          </>
        ) : (
          <Link
            href="/signin"
            className="relative text-white after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-500 hover:after:w-full"
          >
            Entrar
          </Link>
        )}
      </nav>
    </header>
  );
}
