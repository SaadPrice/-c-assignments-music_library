import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArtistView() {
    const { id } = useParams();
    const [artistData, setArtistData] = useState([]);

    useEffect(() => {
        const fetchArtistData = async () => {
            try {
                // Make API call to fetch artist data using the id
                const response = await fetch(`YOUR_API_ENDPOINT/${id}`);
                const data = await response.json();
                setArtistData(data);
            } catch (error) {
                console.error('Error fetching artist data:', error);
            }
        };

        fetchArtistData();
    }, [id]); // Trigger effect when id changes

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    );
}

export default ArtistView;

