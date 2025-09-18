"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const links = [
    { href: '/admin/analytics', label: 'Analytics' },
    { href: '/admin/artists', label: 'Artists' },
    { href: '/admin/albums', label: 'Albums' },
    { href: '/admin/tracks', label: 'Tracks' },
    { href: '/admin/genres', label: 'Genres' },
  ];

  return (
        <div className="px-4 md:px-6">{children}</div>
  );
} 