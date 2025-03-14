import { useState, useEffect } from 'react'
import api from './api/axiosConfig'
import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import NotFound from './components/notFound/NotFound.jsx';

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
    
        const response = await api.get('/api/v1/movies');

        console.log(response.data);
    
        setMovies(response.data);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  const getMovieData = async (movieId) => {
    try {
      
      const response = await api.get(`/api/v1/movies/${movieId}`);
      
      const singleMovie = response.data;
      setMovie(singleMovie);

      setReviews(singleMovie.reviewIds);

    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route path = "/" element = {<Home movies={movies}/>}></Route>
          <Route path="/trailer/:ytTrailerId" element = {<Trailer/>}></Route>
          <Route path='/Reviews/:movieId' element = {<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>
          <Route path='*' element = {<NotFound/>}></Route>

        </Route>
      </Routes>
    </div>
  )
}

export default App
