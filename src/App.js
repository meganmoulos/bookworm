import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllFavorites from './components/AllFavorites';
import FindNewBooks from './components/FindNewBooks';
import AddBook from './components/AddBook';
import User from './components/User';
import Search from './components/Search';
import AllArticles from './components/AllArticles'

function App() {
  const [allBooks, setAllBooks] = useState([])
  const [favoriteBooks, setFavoriteBooks] = useState([])
  const [currentBook, setCurrentBook] = useState(null)
  const [stats, setStats] = useState([])
  const [query, setQuery] = useState([])
  const [allArticles, setAllArticles] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/favorites")
      .then(res => res.json())
      .then(data => setFavoriteBooks(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/bookshelf")
      .then(res => res.json())
      .then(data => setCurrentBook(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then(res => res.json())
      .then(data => setStats(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/articles")
      .then(res => res.json())
      .then(data => setAllArticles(data))
  }, [])

  console.log(allArticles)

  function handleDeleteFavorite(favorite){
    const id = favorite.id
    fetch(`http://localhost:9292/favorites/${id}`, {
      method: "DELETE"
    })
    if(favoriteBooks.find(book => book.id === favorite.id)){
      setFavoriteBooks(favoriteBooks.filter(oldBook => oldBook.id !== favorite.id))
    }
  }

  function handleAddFavorite(favorite){
    fetch("http://localhost:9292/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        star_rating: 4,
        user_id: 1,
        book_id: favorite.id
      }),
    })
  }

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <div className="p-4">
            <Home allBooks={allBooks} favoriteBooks={favoriteBooks} currentBook={currentBook} handleDeleteFavorite={handleDeleteFavorite} handleAddFavorite={handleAddFavorite}/>
          </div>
        </Route>
        <Route exact path="/favorites">
          <AllFavorites />
        </Route>
        <Route exact path="/newbooks">
          <FindNewBooks />
        </Route>
        <Route exact path="/addbook">
          <AddBook />
        </Route>
        <Route exact path="/user">
          <User stats={stats}/>
        </Route>
        <Route exact path="/search">
          <Search allBooks={allBooks} query={query} setQuery={setQuery}/>
        </Route>
        <Route exact path="/articles">
          <AllArticles allArticles={allArticles}/>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
