import PageHero from '@/components/Global/PageHero';
import PageBottom from '@/components/Global/PageBottom';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { baseURL } from '@/lib/baseURL';

const AdminGenresPage = async () => {
  const apiUrl = `${baseURL}/api/genres`;
  const fetchGenres = async () => {
    try {
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed');
      const json = await res.json();
      return json.data || [];
    } catch {
      return [];
    }
  };

  const genres = await fetchGenres();

  return (
    <div>
      <PageHero pageTitle="Admin • Genres" />
      <div className="py-6 flex items-center justify-end">
        <Button asChild>
          <Link href="/admin/genres/new">Add new genre</Link>
        </Button>
      </div>
      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/30">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Display name</th>
              <th className="text-left p-3">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((g) => (
              <tr key={g._id} className="border-t">
                <td className="p-3">{g.name}</td>
                <td className="p-3">{g.display_name}</td>
                <td className="p-3">{g.popularity ?? 0}</td>
              </tr>
            ))}
            {!genres.length && (
              <tr>
                <td className="p-4 text-muted-foreground" colSpan={3}>No genres found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <PageBottom />
    </div>
  );
};

export default AdminGenresPage; 