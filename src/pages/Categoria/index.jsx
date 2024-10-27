import Header from 'components/Header';
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from './Categoria.module.scss'
import Item from 'components/Item';

function Categoria() {
    const { nomeCategoria } = useParams();

    const { categoria, itens } = useSelector(({ categorias, itens, busca }) => {
        const regExpBusca = new RegExp(busca, 'i')

        return {
            categoria: categorias.find(categoria => categoria.id === nomeCategoria),
            itens: itens.filter(item => item.categoria === nomeCategoria && item.titulo.match(regExpBusca))
        }
    })


    return (
        <div>
            <Header
                title={categoria.nome}
                description={categoria.descricao}
                image={categoria.header}
            />
            <div className={styles.itens}>
                {itens?.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Categoria