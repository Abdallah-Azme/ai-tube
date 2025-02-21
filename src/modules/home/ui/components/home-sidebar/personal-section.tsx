"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";
import SafeLink from "../../shared/elements/safe-link";

const items = [
  {
    title: "History",
    icon: HistoryIcon,
    url: "/playlists/history",
    auth: true,
  },
  {
    title: "Liked Videos",
    icon: ThumbsUpIcon,
    url: "/playlists/liked",
    auth: true,
  },
  {
    title: "All playlists",
    icon: ListVideoIcon,
    url: "/playlists",
    auth: true,
  },
];

export default function PersonalSection() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
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
