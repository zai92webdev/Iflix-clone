import React, { useState, useEffect, forwardRef } from 'react'
import { IconButton, Input } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './Search.css'
import { Link } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';
import axios from './axios'
import FlipMove from 'react-flip-move';

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=cdedb88226b744b3186fd789284a0f80&query=";


const Search = forwardRef((props, ref) => {
    const [searchMovies, setSearchMovies] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.get(SEARCH_API + searchMovies)
            .then(res => {
                setMovies(res.data.results)
            })

        // await fetch(SEARCH_API + searchMovies)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setMovies(data.results);
        //     })
        setSearchMovies('');
    }

    const handleChange = (e) => {
        setSearchMovies(e.target.value);
    }

    const [isInput, setIsInput] = useState(false);

    useEffect(() => {
        if (searchMovies.length > 0) {
            setIsInput(true)
        } else {
            setIsInput(false)
        }
    }, [searchMovies])

    const handleButtonClear = () => {
        setSearchMovies('');
    }


    return (
        <div className="search">
            <div className="search__navigation">

                <Link to="/">
                    <IconButton>
                        <ArrowBackIcon className="search__arrowButton" style={{ fontSize: 30 }} />
                    </IconButton>
                </Link>

                <form className="search__form" onSubmit={handleSubmit}>
                    <Input
                        value={searchMovies}
                        onChange={handleChange}
                        fullWidth={true}
                        disableUnderline={true}
                        placeholder="Search for TV,Movies,Genres, and more"
                    />
                </form>

                <div>
                    {isInput && <IconButton onClick={handleButtonClear} ><CloseIcon /></IconButton>}
                </div>
            </div>

            <div >
                <FlipMove className="search__posters">
                    {movies.map(movie => (

                        <div ref={ref} key={movie.id} className="search__poster">
                            <img
                                key={movie.id}
                                className="search__posterCard"
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.title} />
                            <span>{movie.title}</span>
                        </div>

                    ))}
                </FlipMove>
            </div>



        </div>
    )
})

export default Search
