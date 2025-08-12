import PageBottom from '@/components/Global/PageBottom';
import PageHero from '@/components/Global/PageHero';

const Artists = () => {
    return (
        <div>
            <PageHero pageTitle="Favourite Artists" />
            <div className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <p>No artist added to your library</p>
                </div>
            </div>
            <PageBottom />
        </div>
    );
};

export default Artists;