"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import SafeLink from "../../shared/elements/safe-link";

const items = [
  {
    title: "Home",
    icon: HomeIcon,
    url: "/",
  },
  {
    title: "Subscriptions",
    icon: PlaySquareIcon,
    url: "/feed/subscriptions",
    auth: true,
  },
  {
    title: "Trending",
    icon: FlameIcon,
    url: "/feed/trending",
  },
];

export default function MainSection() {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuButton
              key={item.url}
              tooltip={item.title}
              asChild
              isActive={false}
              onClick={() => {}}
            >
              <SafeLink
                href={item.url}
                className="flex items-center gap-4
               "
              >
                <item.icon />
                <span>{item.title}</span>
              </SafeLink>
            </SidebarMenuButton>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
