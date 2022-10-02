import React from 'react';
import Book from './Book';
import {Link} from "react-router-dom"

function AllBooks({allBooks}) {
    return (
        <div className="flex flex-col">
            <h1 className="text-xl font-serif font-bold">Find New Books</h1>
            <div className="flex flex-wrap">
                {allBooks.slice(-6).map(book => <Book key={book.id} book={book}/>)}
                <Link to="/newbooks" className="p-7 font-serif">See More Books</Link>
            </div>
        </div>
    );
}

export default AllBooks;