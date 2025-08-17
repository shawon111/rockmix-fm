import PageBottom from '@/components/Global/PageBottom';
import PageHero from '@/components/Global/PageHero';
import TrackList from '@/components/Tracks/TrackList';
import { baseURL } from '@/lib/baseURL';
import { toast } from 'react-toastify';

const NewReleases = async () => {
    // api url
    const apiUrl = `${baseURL}/api/tracks`;
    // fetch data function
    const fetchTracks = async () => {
        try {
            const res = await fetch(apiUrl, { next: { revalidate: 3600 } })
            if (!res.ok) {
                throw new Error(`Request failed with status ${res.status}`);
            }
            return await res.json();
        } catch (err) {
            toast.error("failed to load tracks, please try again")
            // return empty array to prevent error in layout
            return { data: [] }
        }

    }
    const tracks = await fetchTracks();
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