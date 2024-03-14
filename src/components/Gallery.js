import React from 'react';
import GalleryItem from './GalleryItem'; // Assuming GalleryItem is a component you want to render in Gallery

function Gallery({ data }) {
    return (
        <div>
            {/* Render GalleryItem component for each item in data */}
            {data.map(item => (
                <GalleryItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default Gallery;

