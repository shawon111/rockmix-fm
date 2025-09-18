import PageHero from '@/components/Global/PageHero';
import PageBottom from '@/components/Global/PageBottom';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AdminHomePage = () => {
  const links = [
    { href: '/admin/analytics', label: 'Analytics' },
    { href: '/admin/artists', label: 'Artists' },
    { href: '/admin/albums', label: 'Albums' },
    { href: '/admin/tracks', label: 'Tracks' },
    { href: '/admin/genres', label: 'Genres' },
  ];

  return (
    <div>
      <PageHero pageTitle="Admin" />
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="rounded-lg border p-6 hover:bg-accent transition-colors">
            <div className="text-lg font-semibold">{l.label}</div>
            <div className="text-sm text-muted-foreground mt-1">Manage {l.label.toLowerCase()}.</div>
            <div className="mt-4">
              <Button variant="outline">Open</Button>
            </div>
          </Link>
        ))}
      </div>
      <PageBottom />
    </div>
  );
};

export default AdminHomePage; 