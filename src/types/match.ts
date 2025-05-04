export interface Team {
  id: number;
  name: string;
  logo_url?: string;
}

export interface Competition {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
}

export interface Match {
  id: number;
  competition: Competition;
  team_1: Team;
  team_2: Team;
  score_team_1: number;
  score_team_2: number;
  map_played:
    | "mirage"
    | "train"
    | "dust_2"
    | "overpass"
    | "inferno"
    | "nuke"
    | "vertigo"
    | "ancient";
  round_number?: number | null;
  start_time?: string | null;
  end_time?: string | null;
  status: "pending" | "ongoing" | "completed" | "cancelled";
  winner?: Team | "Empate" | null;
}

export interface APIGetMatches {
  matches: Match[];
}
