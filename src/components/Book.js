import React from 'react';
import {useLocation} from "react-router-dom"


function Book({book, handleChangeDetail, favorited, handleDeleteFavorite, handleAddFavorite}) {

    let rating = book.star_rating
    let star = "⭐"
    let stars = []

    if (rating > 0){
        for (let i = 0; i < rating; i++){
            stars += star
        }
    }

    let location = useLocation()

    return (
        <>
        {location.pathname === "/" ? 
        <div className="flex p-4">
        <div className="flex">
            <img className="w-[120px]" src={book.image_url} alt={book.title}/>
        </div>
        <div className="flex flex-col p-4 w-[170px]">
            <p></p>
            <p>{stars}</p>
            <p className="text-md font-medium">{book.title}</p>
            <p className="text-sm">{book.author}</p>
            <p className="text-sm">{book.publication_year}</p>
            <p className="text-sm">{book.page_count} pages</p>
            {book.library_availability ? <p className="text-sm">Available at Library</p> : <p className="text-sm"> Unavailable at Library</p>}
            {favorited ? <button className="text-left text-sm text-red-500 p-0" onClick={() => handleDeleteFavorite(book)}>Remove</button> : <button className="text-left text-sm text-green-500" onClick={() => handleAddFavorite(book)}>Favorite</button>}
        </div>
    </div>
        :
        <div onClick={() => handleChangeDetail(book)} className="flex p-4">
        <div className="flex">
            <img className="w-[120px]" src={book.image_url} alt={book.title}/>
        </div>
        <div className="flex flex-col p-4 w-[170px]">
            <p></p>
            <p>{stars}</p>
            <p className="text-md font-medium">{book.title}</p>
            <p className="text-sm">{book.author}</p>
            <p className="text-sm">{book.publication_year}</p>
            <p className="text-sm">{book.page_count} pages</p>
            {book.library_availability ? <p className="text-sm">Available at Library</p> : <p className="text-sm"> Unavailable at Library</p>}
            {favorited ? <button className="text-left text-sm text-red-500 p-0" onClick={() => handleDeleteFavorite(book)}>Remove</button> : <button className="text-left text-sm text-green-500" onClick={() => handleAddFavorite(book)}>Favorite</button>}
        </div>
    </div>}
    </>

    );
}

export default Book;
