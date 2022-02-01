import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Catalog from '../page/Catalog'
import Home from '../page/Home'

function MyRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/movie" element={<Catalog/>} />
            <Route exact path="/tv-show" element={<Catalog/>} />
        </Routes>
    )
}

export default MyRoutes
