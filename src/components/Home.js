import React, {useState} from 'react';
import AllBooks from './AllBooks';
import Bookshelf from './Bookshelf';
import Favorites from './Favorites';

function Home({allBooks, favoriteBooks, currentBook, handleDeleteFavorite}) {

    return (
        <>
            <div className="">
                <div className="flex shrink-0 space-x-4">
                    <Bookshelf currentBook={currentBook}/>
                    <Favorites favoriteBooks={favoriteBooks} handleDeleteFavorite={handleDeleteFavorite}/>
                </div>
            </div>
            <div className="">
                <AllBooks allBooks={allBooks}/>
            </div>
        </>
    );
}

export default Home;