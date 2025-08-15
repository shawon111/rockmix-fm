import PageBottom from '@/components/Global/PageBottom';
import PageHero from '@/components/Global/PageHero';
import TrackList from '@/components/Tracks/TrackList';


const Songs = () => {
    const tracks = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ]
    return (
        <div>
            <PageHero pageTitle="Songs You Liked" />
            <div className="py-12">
                {/* <TrackList tracks={tracks} /> */}
            </div>
            <PageBottom />
        </div>
    );
};

export default Songs;