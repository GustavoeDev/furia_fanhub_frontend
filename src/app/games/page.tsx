"use client";

import CalendarIcon from "@/components/icons/calendar";
import Game from "@/components/shared/game";
import { Search } from "lucide-react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useTeamStore } from "@/stores/team-store";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

export default function Games() {
  const { team } = useTeamStore();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredMatches, setFilteredMatches] = useState(team.matches || []);
  const [currentPage, setCurrentPage] = useState(1);

  const gamesPerPage = 6;

  useEffect(() => {
    const filtered = team.matches?.filter((match) => {
      const teamNameMatch = match.team_2.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const formattedMatchDate = dayjs(match.start_time).format("YYYY-MM-DD");

      const dateMatch = selectedDate
        ? formattedMatchDate === selectedDate
        : true;

      return teamNameMatch && dateMatch;
    });

    setFilteredMatches(filtered || []);
    setCurrentPage(1);
  }, [searchTerm, selectedDate, team.matches]);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredMatches?.slice(
    indexOfFirstGame,
    indexOfLastGame
  );
  const totalPages = Math.ceil((filteredMatches?.length || 0) / gamesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="mt-10 mb-10 min-h-screen flex flex-col gap-16">
      <div className="flex justify-between flex-wrap gap-4">
        <h1 className="text-2xl font-bold font-title">Jogos</h1>

        <div className="flex gap-4 flex-wrap">
          <div className="relative w-[250px]">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 pl-10 text-white bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49d2b]"
            />
            <CalendarIcon />
          </div>

          <div className="flex items-center bg-zinc-800 text-white px-4 py-2 rounded-lg w-[250px]">
            <Search className="text-gray-300 w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Procurar adversário"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent outline-none placeholder-gray-400 text-sm w-full"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {currentGames?.map((match) => (
          <Game key={match.id} match={match} />
        ))}
      </div>

      {totalPages > 1 && (
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                />
              </PaginationItem>

              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => paginate(index + 1)}
                    className={
                      currentPage === index + 1 ? "bg-zinc-800 text-white" : ""
                    }
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    currentPage < totalPages && paginate(currentPage + 1)
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
