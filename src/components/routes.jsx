import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar />}>
                    <Route index element={<div>home</div>} />
                </Route>

                
            </Routes>
        </BrowserRouter>
    )
}

export default Router