import PageHero from '@/components/Global/PageHero';
import PageBottom from '@/components/Global/PageBottom';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { baseURL } from '@/lib/baseURL';

const AdminTracksPage = async () => {
  const apiUrl = `${baseURL}/api/tracks`;
  const fetchTracks = async () => {
    try {
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed');
      const json = await res.json();
      return json.data || [];
    } catch {
      return [];
    }
  };

  const tracks = await fetchTracks();

  return (
    <div>
      <PageHero pageTitle="Admin • Tracks" />
      <div className="py-6 flex items-center justify-end">
        <Button asChild>
          <Link href="/admin/tracks/new">Add new track</Link>
        </Button>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/30">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Album</th>
              <th className="text-left p-3">Duration</th>
              <th className="text-left p-3">Plays</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((t) => (
              <tr key={t._id} className="border-t">
                <td className="p-3">{t.name}</td>
                <td className="p-3">{t.album_name || '-'}</td>
                <td className="p-3">{t.duration_formatted || '-'}</td>
                <td className="p-3">{t.plays ?? 0}</td>
              </tr>
            ))}
            {!tracks.length && (
              <tr>
                <td className="p-4 text-muted-foreground" colSpan={4}>No tracks found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PageBottom />
    </div>
  );
};

export default AdminTracksPage; 