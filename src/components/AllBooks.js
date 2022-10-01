import React from 'react';
import Book from './Book';

function AllBooks({allBooks}) {
    return (
        <div className="flex flex-col">
            <h1 className="text-xl font-serif font-bold">Find New Books</h1>
            <div className="flex flex-wrap">
                {allBooks.slice(-6).map(book => <Book key={book.id} book={book}/>)}
                <h3 className="font-serif">See More Books</h3>
            </div>
        </div>
    );
}

export default AllBooks;