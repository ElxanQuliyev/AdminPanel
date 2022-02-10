import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from '../components/MovieDetail/MovieDetail'
import Catalog from '../page/Catalog'
import Home from '../page/Home'

function MyRoutes() {
    return (
        <Routes>
            <Route exact path="/search/:category/:keyword" element={<Catalog/>} />
            <Route exact path="/:category/:id/" element={<MovieDetail/>} />
            <Route exact path="/:category" element={<Catalog/>} />
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}

export default MyRoutes
