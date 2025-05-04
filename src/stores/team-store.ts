import { Team } from "@/types/match";
import { create } from "zustand";

export interface TeamState {
  team: Team;
}

export interface TeamActions {
  setTeam: (team: TeamState) => void;
  clearTeam: () => void;
}

export type TeamStore = TeamState & TeamActions;

const initialTeam: Team = {
  id: 0,
  name: "",
  logo: "",
  competitions: [],
  matches: [],
};

export const useTeamStore = create<TeamStore>((set) => ({
  team: initialTeam,

  setTeam: (team) => set((state) => ({ ...state, ...team })),

  clearTeam: () =>
    set(() => ({
      team: initialTeam,
    })),
}));
