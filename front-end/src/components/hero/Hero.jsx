import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import { Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Hero({movies}) {
    if (!movies || movies.length === 0) {
        return <div>Loading...</div>;
    }

    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }
    return (
        <div className="movie-corousel-container">
            <Carousel>
                {
                    movies.map((movie) => {
                        console.log('Trailer Link:', movie.trailerLink); 
                        console.log('Extracted ID:', new URL(movie.trailerLink).searchParams.get("v"));
                        return (
                            <Paper key={movie.imdbId}>
                                <div className='movie-card-container'>
                                    <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className='movie-details'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt="" />
                                            </div>
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className='movie-buttons-container'>
                                                <Link to={`/trailer/${new URL(movie.trailerLink).searchParams.get("v")}`}>
                                                <div className='play-button-icon-container'>
                                                    <FontAwesomeIcon icon={faCirclePlay} className='play-button-icon'/>
                                                </div>
                                                </Link>

                                                <div className="movie-review-button-container">
                                                    <Button variant = "info" onClick = {() => reviews(movie.imdbId)}>Reviews</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        
        </div>
    );
}

export default Hero;