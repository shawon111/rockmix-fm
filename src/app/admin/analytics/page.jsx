import PageHero from '@/components/Global/PageHero';
import PageBottom from '@/components/Global/PageBottom';
import { baseURL } from '@/lib/baseURL';

const AdminAnalyticsPage = async () => {
  const apiUrl = `${baseURL}/api/admin/analytics`;

  const fetchStats = async () => {
    try {
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed');
      const json = await res.json();
      return json.data || { artists: 0, albums: 0, tracks: 0, genres: 0 };
    } catch {
      return { artists: 0, albums: 0, tracks: 0, genres: 0 };
    }
  };

  const stats = await fetchStats();

  return (
    <div>
      <PageHero pageTitle="Admin Analytics" />
      <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-lg border p-6">
          <div className="text-sm text-muted-foreground">Artists</div>
          <div className="text-3xl font-semibold mt-2">{stats.artists}</div>
        </div>
        <div className="rounded-lg border p-6">
          <div className="text-sm text-muted-foreground">Albums</div>
          <div className="text-3xl font-semibold mt-2">{stats.albums}</div>
        </div>
        <div className="rounded-lg border p-6">
          <div className="text-sm text-muted-foreground">Tracks</div>
          <div className="text-3xl font-semibold mt-2">{stats.tracks}</div>
        </div>
        <div className="rounded-lg border p-6">
          <div className="text-sm text-muted-foreground">Genres</div>
          <div className="text-3xl font-semibold mt-2">{stats.genres}</div>
        </div>
      </div>
      <PageBottom />
    </div>
  );
};

export default AdminAnalyticsPage; 