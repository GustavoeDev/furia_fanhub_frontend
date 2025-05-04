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

export default function Games() {
  return (
    <div className="mt-10 mb-10 min-h-screen flex flex-col gap-16">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold font-title">Jogos</h1>
        <div className="flex gap-4">
          <div className="relative w-[250px]">
            <input
              type="date"
              className="w-full px-4 py-2 pl-10 text-white bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49d2b]"
            />
            <CalendarIcon />
          </div>
          <div className="flex items-center bg-zinc-800 text-white px-4 py-2 rounded-lg w-[250px]">
            <Search className="text-gray-300 w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Procurar adversário"
              className="bg-transparent outline-none placeholder-gray-400 text-sm w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-12 flex-wrap justify-between">
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
