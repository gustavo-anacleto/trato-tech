import DefaultPage from 'components/DefaultPage'
import Carrinho from 'pages/Carrinho'
import Categoria from 'pages/Categoria'
import Home from 'pages/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
                    <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
                    <Route path='carrinho' element={<Carrinho />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router