import { PlayCircle } from 'lucide-react';
import albumImg from '../../assets/images/genreImage.jpg'
import Link from 'next/link';
import Image from 'next/image';

const AlbumCard = () => {
    return (
        <div className='col-span-1'>
            <Link href="#">
                <div className='card w-[235px] h-[235px] rounded bg-gray-800 relative overflow-hidden'>
                    <Image
                        src={albumImg}
                        alt="Genre Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded absolute top-0 left-0 z-0 shadow-[0_3px_5px_-1px_rgba(0,0,0,0.2),0_5px_8px_rgba(0,0,0,0.141),0_1px_14px_rgba(0,0,0,0.122)]"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-85 z-10 transition-all"></div>
                    <h3 className='text-[20px] text-center z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <PlayCircle color='#fff' size={35} />
                    </h3>
                </div>
            </Link>
            <div>
                {/* album link */}
                <Link className='text-center text-sm leading-[20px] hover:underline block mt-3' href="#">
                    5 clock funnies
                </Link>
                {/* artist link */}
                <Link className='text-center text-sm leading-[20px] hover:underline text-black dark:text-[#fffb] block mt-1' href="#">
                    RockmixFM
                </Link>
            </div>
        </div>
    );
};

export default AlbumCard;