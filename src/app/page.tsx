"use client";

import BannerMain from "@/components/sections/banner";
import LastMatches from "@/components/sections/last-matches";
import LiveMatch from "@/components/sections/live-match";
import OngoingCompetitions from "@/components/sections/ongoing-competitions";
import { getTeam } from "@/lib/requests";
import { useTeamStore } from "@/stores/team-store";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [, setUser] = useState<User | null>(null);
  const { setTeam } = useTeamStore();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    setUser(user);
  }, []);

  async function handleGetTeam() {
    const response = await getTeam(2);

    if (response.error) {
      toast.error("Erro ao pegar dados da equipe", {
        position: "bottom-right",
      });
      return;
    }

    if (response.data) {
      const { id, name, logo, competitions, matches } = response.data;

      setTeam({
        team: {
          id,
          name,
          logo,
          competitions,
          matches,
        },
      });
    }
  }

  useEffect(() => {
    handleGetTeam();
  }, []);

  return (
    <main>
      <BannerMain />
      <LiveMatch />
      <OngoingCompetitions />
      <LastMatches />
    </main>
  );
}
