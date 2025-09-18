import PageHero from '@/components/Global/PageHero';
import PageBottom from '@/components/Global/PageBottom';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { baseURL } from '@/lib/baseURL';

const AdminAlbumsPage = async () => {
  const apiUrl = `${baseURL}/api/albums`;
  const fetchAlbums = async () => {
    try {
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed');
      const json = await res.json();
      return json.data || [];
    } catch {
      return [];
    }
  };

  const albums = await fetchAlbums();

  return (
    <div>
      <PageHero pageTitle="Admin • Albums" />
      <div className="py-6 flex items-center justify-end">
        <Button asChild>
          <Link href="/admin/albums/new">Add new album</Link>
        </Button>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/30">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Release date</th>
              <th className="text-left p-3">Plays</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((a) => (
              <tr key={a._id} className="border-t">
                <td className="p-3">{a.name}</td>
                <td className="p-3">{a.release_date ? new Date(a.release_date).toLocaleDateString() : '-'}</td>
                <td className="p-3">{a.plays ?? 0}</td>
              </tr>
            ))}
            {!albums.length && (
              <tr>
                <td className="p-4 text-muted-foreground" colSpan={3}>No albums found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PageBottom />
    </div>
  );
};

export default AdminAlbumsPage; 