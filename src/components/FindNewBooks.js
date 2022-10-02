import React, {useState, useEffect} from 'react';
import Book from './Book';
import {Link} from "react-router-dom"

function FindNewBooks(props) {
    const [allBooks, setAllBooks] = useState([])
    const [currentBook, setCurrentBook] = useState({})

    useEffect(() => {
        fetch("http://localhost:9292/books")
          .then(res => res.json())
          .then(data => setAllBooks(data))
      }, [])

    function handleChangeDetail(currentBook){
        setCurrentBook(currentBook)
    }
    
    return (
        <>
            <div className="flex w-full mb-4">
                <div className="p-2 flex flex-col w-1/2">
                <h1 className='font-serif font-bold text-xl'>Find New Books</h1>
                    <img className="w-[350px] p-2" src={currentBook.image_url} alt={currentBook.title}/>
                    <p className="font-serif font-medium">{currentBook.title}</p>
                    <p>{currentBook.author}</p>
                    <Link to="/addbook" className="p-7 font-serif"><button className="bg-lime-500 rounded w-40 p-4 mt-10">Add A Book</button></Link>
                </div>
                <div className="flex flex-wrap bg-orange-100 rounded-md w-1/2">
                    {allBooks.map(book => <Book key={book.id} book={book} handleChangeDetail={handleChangeDetail} />)}
                </div>
            </div>
        </>
    );
}
export default FindNewBooks;