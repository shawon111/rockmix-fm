import React from 'react';

const PageTitle = ({title}) => {
    return (
        <h1 className='text-3xl capitalize font-[300]'>
            {title}
        </h1>
    );
};

export default PageTitle;