"use client";

import { usePathname } from "next/navigation";
import Header from "../shared/header";

export default function Layout() {
  const pathname = usePathname();

  const noHeaderRoutes = ["/auth/signin", "/auth/signup"];

  const shouldRenderHeader = !noHeaderRoutes.includes(pathname);

  return <>{shouldRenderHeader && <Header />}</>;
}
