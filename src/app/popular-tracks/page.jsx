import PageBottom from '@/components/Global/PageBottom';
import PageHero from '@/components/Global/PageHero';
import TrackList from '@/components/Tracks/TrackList';
import React from 'react';

const PopularTracks = () => {
    return (
        <div>
            <PageHero pageTitle="Popular tracks" />
            <div className="py-12">
                <TrackList />
            </div>
            <PageBottom />
        </div>
    );
};

export default PopularTracks;