import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from '../components/MovieDetail/MovieDetail'
import Catalog from '../page/Catalog'
import Home from '../page/Home'

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route exact path="/movie" element={<Catalog/>} />
            <Route exact path="/movie/:id/" element={<MovieDetail/>} />
            <Route exact path="/tv/:id/" element={<MovieDetail/>} />
            <Route path="/tv-show/" element={<Catalog/>} />
        </Routes>
    )
}

export default MyRoutes
