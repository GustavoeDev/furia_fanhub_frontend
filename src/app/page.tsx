import BannerMain from "@/components/sections/banner";
import LastMatches from "@/components/sections/last-matches";
import LiveMatch from "@/components/sections/live-match";

export default function Home() {
  return (
    <main>
      <BannerMain />
      <LiveMatch />
      <LastMatches />
    </main>
  );
}
