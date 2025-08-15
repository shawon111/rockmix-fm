import PageBottom from '@/components/Global/PageBottom';
import PageHero from '@/components/Global/PageHero';
import TrackList from '@/components/Tracks/TrackList';
import { baseURL } from '@/lib/baseURL';

const NewReleases = async() => {
    const apiUrl = `${baseURL}/api/tracks`;
    const res = await fetch(apiUrl, {next: {revalidate: 3600}})
    const tracks = await res.json();
    return (
        <div>
            <PageHero pageTitle="New Releases" />
            <div className="py-12">
                <TrackList tracks={tracks.data} />
            </div>
            <PageBottom />
        </div>
    );
};

export default NewReleases;