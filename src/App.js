import React, { useEffect, useState, Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { wrapPromise } from './helper'; // Importing the Suspense helper function
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import Spinner from './components/Spinner'; // Importing Spinner component

function App() {
    let [search, setSearch] = useState('');
    let [message, setMessage] = useState('Search for Music!');
    let [data, setData] = useState(null); // Change data initial state to null

    useEffect(() => {
        const fetchData = async () => {
            document.title = `${search} Music`;
            const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead');
            const resData = await response.json();
            if (resData.results.length > 0) {
                setData(wrapPromise(Promise.resolve(resData.results))); // Wrap the promise with wrapPromise
            } else {
                setMessage('Not Found');
            }
        };
        fetchData();
    }, [search]); // Add search as a dependency for useEffect

    // Function to handle search
    const handleSearch = (searchTerm) => {
        setSearch(searchTerm);
    };

    return (
        <div>
            {message}
            <Router>
                <Routes>
                    <Route path="/" element={
                        <Fragment>
                            <SearchBar handleSearch={handleSearch}/>
                            {/* Render Gallery inside Suspense */}
                            <Suspense fallback={<Spinner />}>
                                <Gallery data={data} />
                            </Suspense>
                        </Fragment>
                    } />
                    {/* Add routes for AlbumView and ArtistView */}
                    <Route path="/album/:id" element={<AlbumView />} />
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router>
        </div>
    ); 
}

export default App;





  



