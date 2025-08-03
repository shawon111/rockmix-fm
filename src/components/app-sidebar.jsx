"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import logo from "@/assets/images/rockmixfm-logo.png"
import Link from "next/link"
import { Input } from "./ui/input"
import { BadgePlus, Disc2, History, ListMusic, Mails, Mic, Tag, TrendingUp } from "lucide-react"

const data = {
  user: {
    name: "Rock Mix FM",
    email: "m@example.com",
    avatar: "/rockmix-user-avatar.png",
  },
  navMain: [
    {
      title: "Genre",
      url: "#",
      icon: Tag,
    },
    {
      title: "Popular Tracks",
      url: "#",
      icon: TrendingUp,
    },
    {
      title: "New Releases",
      url: "#",
      icon: BadgePlus,
    },
    {
      title: "Submit Music",
      url: "#",
      icon: Mails,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
  ],
  yourMusic: {
    title: "Your Music",
    data : [
      {
      name: "Songs",
      url: "#",
      icon: ListMusic,
    },
    {
      name: "Artists",
      url: "#",
      icon: Mic,
    },
    {
      name: "History",
      url: "#",
      icon: History,
    },
    {
      name: "Albums",
      url: "#",
      icon: Disc2,
    },
    ]
  },
  playList: {
    title: "Playlists",
    data : [
      {
      name: "Rock On",
      url: "#",
    },
    {
      name: "80s Rock",
      url: "#",
    }
    ]
  },
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link
              className="flex items-center justify-center"
              href="/">
              <Image
                src={logo}
                alt="Rock Mix FM Logo"
                width={155}
                height={50}
              />
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem className="mt-2">
            <div className="flex items-center justify-center">
              <Input className="w-full lg:w-[90%]" type="search" placeholder="Search..." />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.yourMusic} />
        <NavDocuments items={data.playList} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>)
  );
}
