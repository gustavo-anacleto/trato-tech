import {  configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens";
import carrinhoSlice  from "./reducers/carrinho";
import buscaSlice  from "./reducers/busca";

const store = configureStore({
    reducer: {
        categorias: categoriesSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice
    }
})

export default store