import PageHero from '@/components/Global/PageHero';
import PlaylistHead from '@/components/Playlists/PlaylistHead';
import TrackList from '@/components/Tracks/TrackList';

const SinglePlaylist = () => {
    const tracks = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ]
    return (
        <div>
            <PlaylistHead />
            <PageHero />
            <div className="py-12">
                {/* <TrackList tracks={tracks} /> */}
            </div>
        </div>
    );
};

export default SinglePlaylist;