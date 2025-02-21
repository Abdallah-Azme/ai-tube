import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import SafeLink from "../../shared/elements/safe-link";
import Image from "next/image";
import SearchInput from "./search-input";
import AuthButton from "@/modules/auth/ui/components/auth-button";

export default function HomeNavbar() {
  return (
    <nav className="fixed top-0 inset-x-0 h-16 bg-white flex items-center px-2 pe-5 z-50">
      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center shrink-0 w-full">
          <SidebarTrigger />
          {/* logo */}
          <SafeLink href="/" className="flex gap-1 items-center">
            <Image
              alt="Ai tube logo"
              src={"/assets/ai-tube.webp"}
              width={32}
              height={32}
              className="rounded-full"
            />
            <p className="text-xl font-semibold tracking-tight">AiTube</p>
          </SafeLink>

          {/* search bar */}
          <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
            <SearchInput />
          </div>

          {/* auth button */}
          <div className="flex-shrink-0 items-center flex gap-4">
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
