import React, {useState} from 'react';
import AllBooks from './AllBooks';
import Bookshelf from './Bookshelf';
import Favorites from './Favorites';

function Home({allBooks, favoriteBooks, currentBook}) {

    return (
        <>
            <div className="">
                <div className="flex shrink-0 space-x-4">
                    <Bookshelf currentBook={currentBook}/>
                    <Favorites favoriteBooks={favoriteBooks} />
                </div>
            </div>
            <div className="">
                <AllBooks allBooks={allBooks}/>
            </div>
        </>
    );
}

export default Home;