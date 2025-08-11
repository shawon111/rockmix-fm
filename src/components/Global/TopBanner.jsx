import Image from 'next/image';
import topBannerImg from '../../assets/images/home-top.png'

const TopBanner = () => {
    return (
        <div>
            <Image
            src={topBannerImg}
            alt="Top Banner"
            className="w-full h-auto object-cover"
            width={1280}
            height={165}
            />
        </div>
    );
};

export default TopBanner;