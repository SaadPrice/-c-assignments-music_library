import { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';

function App() {
    // State variables for managing search, message, and data
    let [search, setSearch] = useState('');
    let [message, setMessage] = useState('Search for Music!');
    let [data, setData] = useState([]);

    // Effect to fetch data when search changes
    useEffect(() => {
        const fetchData = async () => {
            document.title = `${search} Music`; // Update document title
            const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(search)}`);
            const resData = await response.json();
            if (resData.results.length > 0) {
                setData(resData.results); // Set data if results are found
            } else {
                setMessage('Not Found'); // Display message if no results found
            }
        };
        fetchData();
    }, [search]); // Dependency on search parameter

    // Function to handle search queries
    const handleSearch = (query) => {
        setSearch(query);
    };

    return (
        <div>
            {/* Display message */}
            {message}

            {/* Router setup */}
            <Router>
                <Routes>
                    {/* Home route */}
                    <Route path="/" element={
                        <Fragment>
                            {/* SearchBar component with handleSearch function */}
                            <SearchBar handleSearch={handleSearch} />

                            {/* Gallery component to display music data */}
                            <Gallery data={data} />
                        </Fragment>
                    } />

                    {/* Route for displaying album details */}
                    <Route path="/album/:id" element={<AlbumView />} />

                    {/* Route for displaying artist details */}
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;



