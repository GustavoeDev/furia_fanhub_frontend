import Match from "@/components/pages/match";

interface MatchPageProps {
  params: {
    matchId: string;
  };
}

export default async function MatchPage({ params }: MatchPageProps) {
  const { matchId } = await params; // You need to await params here

  if (!matchId) {
    return <div>Match ID não encontrado</div>;
  }

  return <Match matchId={matchId} />;
}
