import React, { useState, useEffect, useRef } from 'react'
import axios from './axios';
import './Row.css'
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const listRef = useRef(null);

    const scrollLeft = () => {


        if (listRef.current) {
            listRef.current.scrollBy({
                top: 0,
                left: -200,
                behavior: 'smooth'
            });
        }
    }

    const scrollRight = () => {
        if (listRef.current) {
            listRef.current.scrollBy({ top: 0, left: 200, behavior: 'smooth' });
        }
    }


    return (
        <div className="row">
            <h2>{title}</h2>

            <div className='row__slideContainer'>

                <Icon className="row__slideIcon" name='caret left' size='huge' onClick={scrollLeft} ></Icon>

                <div ref={listRef} className="row__posters">
                    {movies.map(movie => (
                        <img
                            key={movie.id}
                            className="row__poster"
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.name} />
                    ))}
                </div>

                <Icon className="row__slideIcon" name='caret right' size='huge' onClick={scrollRight} ></Icon>

            </div>


        </div>
    )
}

export default Row
