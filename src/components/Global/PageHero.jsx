import React from 'react';
import PageTitle from './PageTitle';
import TopBanner from './TopBanner';

const PageHero = ({ pageTitle }) => {
    return (
        <section>
            <div className="mb-6">
                <PageTitle title={pageTitle} />
            </div>
            <TopBanner />
        </section>
    );
};

export default PageHero;