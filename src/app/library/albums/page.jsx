import AlbumCard from '@/components/Albums/AlbumCard';
import PageBottom from '@/components/Global/PageBottom';
import PageHero from '@/components/Global/PageHero';

const Albums = () => {
    return (
        <div>
            <PageHero pageTitle="Albums" />
            <div className="py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <AlbumCard />
                </div>
            </div>
            <PageBottom />
        </div>
    );
};

export default Albums;