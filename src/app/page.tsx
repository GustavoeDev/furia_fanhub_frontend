"use client";

import BannerMain from "@/components/sections/banner";
import LastMatches from "@/components/sections/last-matches";
import LiveMatch from "@/components/sections/live-match";
import OngoingCompetitions from "@/components/sections/ongoing-competitions";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setUser(user);
  }, []);

  console.log(user);

  return (
    <main>
      <BannerMain />
      <LiveMatch />
      <OngoingCompetitions />
      <LastMatches />
    </main>
  );
}
