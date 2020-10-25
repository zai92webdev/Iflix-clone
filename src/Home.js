import React from 'react'
import Header from './Header'
import Navbar from './Navbar';
import Navlogo from './Navlogo';
import Footer from './Footer';
import Row from './Row';
import request from './requests';



function Home() {
    return (

        <div>
            <Navlogo />
            <Navbar />

            <Header />
            <Row title="Trending" fetchUrl={request.fetchTrending} />
            <Row title="Tv Shows" fetchUrl={request.fetchTvshows} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action Tv Shows & Anime" fetchUrl={request.fetchActionTvAnime} />
            <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
            <Footer />

        </div>

    )
}

export default Home
