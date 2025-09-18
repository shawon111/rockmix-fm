import PageHero from '@/components/Global/PageHero';
import PageBottom from '@/components/Global/PageBottom';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { baseURL } from '@/lib/baseURL';

const AdminArtistsPage = async () => {
  const apiUrl = `${baseURL}/api/artists`;
  const fetchArtists = async () => {
    try {
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed');
      const json = await res.json();
      return json.data || [];
    } catch {
      return [];
    }
  };

  const artists = await fetchArtists();

  return (
    <div>
      <PageHero pageTitle="Admin • Artists" />
      <div className="py-6 flex items-center justify-end">
        <Button asChild>
          <Link href="/admin/artists/new">Add new artist</Link>
        </Button>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/30">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Verified</th>
              <th className="text-left p-3">Plays</th>
              <th className="text-left p-3">Views</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((a) => (
              <tr key={a._id} className="border-t">
                <td className="p-3">{a.name}</td>
                <td className="p-3">{a.verified ? 'Yes' : 'No'}</td>
                <td className="p-3">{a.plays ?? 0}</td>
                <td className="p-3">{a.views ?? 0}</td>
              </tr>
            ))}
            {!artists.length && (
              <tr>
                <td className="p-4 text-muted-foreground" colSpan={4}>No artists found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PageBottom />
    </div>
  );
};

export default AdminArtistsPage; 