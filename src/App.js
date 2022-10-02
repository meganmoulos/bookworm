import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllFavorites from './components/AllFavorites';
import FindNewBooks from './components/FindNewBooks';

function App() {
  const [allBooks, setAllBooks] = useState([])
  const [favoriteBooks, setFavoriteBooks] = useState([])
  const [currentBook, setCurrentBook] = useState({})


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

  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <div className="p-4">
            <Home allBooks={allBooks} favoriteBooks={favoriteBooks} currentBook={currentBook}/>
          </div>
        </Route>
        <Route exact path="/favorites">
          <AllFavorites />
        </Route>
        <Route>
          <FindNewBooks />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
