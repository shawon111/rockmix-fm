import GenreCard from './GenreCard';

const Genres = () => {
    return (
        <section className="pt-12 pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                <GenreCard />
            </div>
        </section>
    );
};

export default Genres;