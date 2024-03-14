import React from 'react';

function Gallery({ data }) {
    return (
        <div>
            {/* Map through data and display music items */}
            {data.map((item) => (
                <div key={item.trackId}>
                    <h3>{item.trackName}</h3>
                    <p>Artist: {item.artistName}</p>
                    {/* Add more details as needed */}
                </div>
            ))}
        </div>
    );
}

export default Gallery;


