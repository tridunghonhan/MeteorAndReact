import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
    {title: 'pen', link: 'http://dummyimage.com/600x400'},
    {title: 'Pine Tree', link: 'http://dummyimage.com/600x400'},
    {title: 'Mug', link: 'http://dummyimage.com/600x400'}
];

const ImageList = () => {
    const RenderedImages = IMAGES.map( function(image) {
        return <ImageDetail />
    });

    return (
        <ul>
            {RenderedImages}
        </ul>
    );
};
export default ImageList;