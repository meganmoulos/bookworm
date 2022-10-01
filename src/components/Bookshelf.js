import React from 'react';

function Bookshelf({currentBook}) {
    console.log(currentBook)
    return (
        <div className="p-2">
            <h1 className="font-serif font-bold text-xl p-3">My Bookshelf</h1>
            <img className="w-[250px] p-2" src={currentBook.image_url} alt={currentBook.title}/>
            <p className="font-bold font-serif p-2">Currently Reading</p>
            <p className="font-serif font-medium">{currentBook.title}</p>
            <p>{currentBook.author}</p>

        </div>
    );
}

export default Bookshelf;