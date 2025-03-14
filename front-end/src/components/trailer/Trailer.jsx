
import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';


const Trailer = () => {

    let params = useParams();
    const key = params.ytTrailerId;
    
    console.log('Trailer component rendered');
    console.log('ytTrailerId:', key);

    return (
        <div className='react-player-container'>
            {(key!=null)? <ReactPlayer controls={true} playing = {true} url={`https://www.youtube.com/watch?v=${key}`}  
            width='100%' height='100%'/> : null} 
        </div>
    );
}

export default Trailer;