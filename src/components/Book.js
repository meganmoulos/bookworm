import React from 'react';

function Book({book}) {
    return (
        <div className="flex p-4">
            <div className="flex">
                <img className="w-[120px]" src={book.image_url} alt={book.title}/>
            </div>
            <div className="flex flex-col p-4 w-[170px]">
                <p>{book.star_rating}</p>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{book.publication_year}</p>
                <p>{book.page_count} pages</p>
            </div>
        </div>
    );
}

export default Book;