import React, { useState, useEffect } from 'react'
import './Header.css'
import request from './requests';
import instance from './axios';


function Header() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request1 = await instance.get(request.fetchTopRated)
            setMovie(request1.data.results[Math.floor(Math.random() * request1.data.results.length)]);
        }
        fetchData();
    }, [])


    return (
        <div className="header"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="header__content">
                <button className="header__button"><span className="header__buttonIcon">▶</span> Play</button>
            </div>


        </div>


    )
}

export default Header;
