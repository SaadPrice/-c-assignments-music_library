import React, { useState } from 'react';

function SearchBar({ handleSearch }) {
    // State variable for managing search input
    const [query, setQuery] = useState('');

    // Function to handle search input change
    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for music..."
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;


    