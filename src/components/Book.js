import React from 'react';

function Book({book, handleChangeDetail, favorited, handleDeleteFavorite, handleAddFavorite}) {
    // How to use stars instead of nums? let star = '⭐'

    return (
        <div onClick={() => handleChangeDetail(book)} className="flex p-4">
            <div className="flex">
                <img className="w-[120px]" src={book.image_url} alt={book.title}/>
            </div>
            <div className="flex flex-col p-4 w-[170px]">
                <p></p>
                <p>{book.star_rating}</p>
                <p className="text-md font-medium">{book.title}</p>
                <p className="text-sm">{book.author}</p>
                <p className="text-sm">{book.publication_year}</p>
                <p className="text-sm">{book.page_count} pages</p>
                {book.library_availability ? <p className="text-sm">Available at Library</p> : <p className="text-sm"> Unavailable at Library</p>}
                {favorited ? <p className="text-sm text-red-500" onClick={() => handleDeleteFavorite(book)}>Remove</p> : <p className="text-sm text-green-500" onClick={() => handleAddFavorite(book)}>Favorite</p>}
            </div>
        </div>
    );
}

export default Book;
