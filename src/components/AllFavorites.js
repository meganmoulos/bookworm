import React, {useState, useEffect} from 'react';
import Book from './Book';

function AllFavorites(props) {
    const [favorites, setFavorites] = useState([])
    const [currentFavorite, setCurrentFavorite] = useState({})

    useEffect(() => {
        fetch("http://localhost:9292/favorites")
          .then(res => res.json())
          .then(data => setFavorites(data))
      }, [])

    function handleChangeDetail(favorite){
        setCurrentFavorite(favorite)
    }
    
    return (
        <>
            <div className="flex w-full mb-4">
                <div className="p-2 flex flex-col w-1/2">
                <h1 className='font-serif font-bold text-xl'>Favorites</h1>
                <p>Select a favorite book for more info</p>
                    <img className="w-[350px] p-2" src={currentFavorite.image_url} alt={currentFavorite.title}/>
                    
                    <div className="p-4">
                        <p className="font-serif font-medium">{currentFavorite.title}</p>
                        <p>{currentFavorite.author}</p>
                        <p>{currentFavorite.publication_year}</p>
                        <p>{currentFavorite.page_count} pages</p>
                    </div>
                </div>
                <div className="flex flex-wrap bg-orange-100 rounded-md w-1/2">
                    {favorites.map(book => <Book key={book.id} book={book} handleChangeDetail={handleChangeDetail} favorited={true} />)}
                </div>
            </div>
        </>
    );
}

export default AllFavorites;