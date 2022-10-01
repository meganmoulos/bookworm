import React from 'react';
import Book from './Book';

function Favorites({favoriteBooks}) {
    return (
        <div className="flex-1">
            <h1 className="font-bold font-serif text-xl p-3">Favorites</h1>
            <div>
                <div className="flex flex-wrap bg-orange-100 rounded-md">
                    {favoriteBooks.slice(-4).map(book => <Book key={book.id} book={book}/>)}
                    <h3 className="p-7 font-serif">See More Favorites</h3>
                </div>
            </div>
        </div>
    );
}

export default Favorites;