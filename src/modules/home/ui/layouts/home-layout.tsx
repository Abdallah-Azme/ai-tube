import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import HomeNavbar from "../components/home-navbar";
import HomeSidebar from "../components/home-sidebar";

interface IHomeLAyoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: IHomeLAyoutProps) {
  return (
    <SidebarProvider>
      <div className="">
        <HomeNavbar />
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto "> {children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
