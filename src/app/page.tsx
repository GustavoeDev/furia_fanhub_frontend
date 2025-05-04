import BannerMain from "@/components/sections/banner";
import LastMatches from "@/components/sections/last-matches";
import LiveMatch from "@/components/sections/live-match";
import OngoingCompetitions from "@/components/sections/ongoing-competitions";

export default function Home() {
  return (
    <main>
      <BannerMain />
      <LiveMatch />
      <OngoingCompetitions />
      <LastMatches />
    </main>
  );
}
