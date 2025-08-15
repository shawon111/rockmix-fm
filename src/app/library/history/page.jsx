import PageBottom from '@/components/Global/PageBottom';
import PageHero from '@/components/Global/PageHero';
import TrackList from '@/components/Tracks/TrackList';
import React from 'react';

const History = () => {
    const tracks = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ]
    return (
        <div>
            <PageHero pageTitle="History" />
            <div className="py-12">
                {/* <TrackList tracks={tracks} /> */}
            </div>
            <PageBottom />
        </div>
    );
};

export default History;