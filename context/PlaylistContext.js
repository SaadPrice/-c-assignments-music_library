// context/PlaylistContext.js
import React, { createContext, useState, useEffect } from 'react';

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch playlists from API
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('api/playlists');
        const data = await response.json();
        setPlaylists(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <PlaylistContext.Provider value={{ playlists, loading }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContext;
