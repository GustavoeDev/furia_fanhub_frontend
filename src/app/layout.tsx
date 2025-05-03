import type { Metadata } from "next";
import { Russo_One, Open_Sans } from "next/font/google";
import "./styles/globals.css";
import Header from "@/components/shared/header";

const russoOne = Russo_One({
  weight: "400",
  variable: "--font-title",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furia FanHub",
  description:
    "Acompanhe as partidas da FURIA ao vivo, interaja em chats em tempo real e apoie o time com mensagens. Tudo em um só lugar para fãs de Counter-Strike.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${russoOne.variable} ${openSans.variable} antialiased flex flex-col min-h-screen max-w-[70rem] mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
