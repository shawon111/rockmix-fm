import Image from 'next/image';
import React from 'react';
import pageBottomImg from '../../assets/images/age-botom-img.jpg';

const PageBottom = () => {
    return (
        <div>
            <Image
            src={pageBottomImg}
            alt='Page Bottom Image'
            className="w-full h-auto object-cover"
            width={1280}
            height={165}
            />
        </div>
    );
};

export default PageBottom;