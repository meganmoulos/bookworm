import React from 'react';
import Book from './Book';
import {Link} from "react-router-dom"

function Favorites({favoriteBooks, handleDeleteFavorite}) {

    return (
        <div className="flex-1">
            <h1 className="font-serif font-bold text-xl p-3">Favorites</h1>
            <div>
                <div className="flex flex-wrap bg-orange-50 rounded-md">
                    {favoriteBooks.slice(-4).map(book => <Book key={book.id} book={book} favorited={true} handleDeleteFavorite={handleDeleteFavorite} />)}
                    <Link to="/favorites" className="p-7 font-serif">See More Favorites</Link>
                </div>
            </div>
        </div>
    );
}

export default Favorites;