import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AlbumView() {
    const { id } = useParams();
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        const fetchAlbumData = async () => {
            try {
                // Make API call to fetch album data using the id
                const response = await fetch(`YOUR_API_ENDPOINT/${id}`);
                const data = await response.json();
                setAlbumData(data);
            } catch (error) {
                console.error('Error fetching album data:', error);
            }
        };

        fetchAlbumData();
    }, [id]); // Trigger effect when id changes

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Album Data Goes Here!</p>
        </div>
    );
}

export default AlbumView;


