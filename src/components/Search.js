import React from 'react';
import Book from './Book';

function Search({allBooks, setQuery, query, handleAddFavorite}) {
    function handleChange(e){
        setQuery(e.target.value)
    }

    const booksToDisplay = allBooks.filter((book) =>
        book.title.toLowerCase().includes(query))
    
    return (
        <div className="p-10">
            <h1 className="font-serif font-bold text-xl">Search</h1>
            <input className="border rounded-sm" type="text" onChange={handleChange} value={query} />
            {booksToDisplay.map(book => <Book key={book.id} book={book} handleAddFavorite={handleAddFavorite} />)}
        </div>
    );
}

export default Search;