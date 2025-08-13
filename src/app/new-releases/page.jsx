import PageBottom from '@/components/Global/PageBottom';
import PageHero from '@/components/Global/PageHero';
import TrackList from '@/components/Tracks/TrackList';

const NewReleases = () => {
    const tracks = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ]
    return (
        <div>
            <PageHero pageTitle="New Releases" />
            <div className="py-12">
                <TrackList tracks={tracks} />
            </div>
            <PageBottom />
        </div>
    );
};

export default NewReleases;