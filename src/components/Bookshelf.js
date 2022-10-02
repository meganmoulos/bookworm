import React from 'react';

function Bookshelf({currentBook}) {
    return (
        <div className="p-2">
            <h1 className="font-serif font-bold text-xl p-3">My Bookshelf</h1>
            <img className="w-[300px] p-2" src={currentBook.image_url} alt={currentBook.title}/>
            <p className="font-bold font-serif p-2">Currently Reading</p>
            <div className="p-2">
                <p className="font-medium">{currentBook.title}</p>
                <p>{currentBook.author}</p>
            </div>
        </div>
    );
}

export default Bookshelf;