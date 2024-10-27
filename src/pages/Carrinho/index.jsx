import Header from 'components/Header'
import styles from './Carrinho.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Item from 'components/Item'
import { resetarCarrinho } from 'store/reducers/carrinho'

function Carrinho() {
    const dispacth = useDispatch()

    const { carrinho, total } = useSelector(store => {
        let total = 0;
        const regExpBusca = new RegExp(store.busca, 'i')
        const carrinhoReduce = store.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = store.itens.find(item => item.id === itemNoCarrinho.id);

            total += (item.preco * itemNoCarrinho.quantidade)
            
            if (item.titulo.match(regExpBusca)) {
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade
                });
            }

            return itens
        }, [])
        return { carrinho: carrinhoReduce, total }
    })
    return (
        <div>
            <Header
                title="Carrinho de compras"
                description="Confira produtos que você adicionou ao carrinho"
            />
            <div className={styles.carrinho}>
                {carrinho.map(item => <Item key={item.id} {...item} carrinho />)}
                <div className={styles.total}>
                    <strong>Resumo da compra</strong>
                    <span>Subtotal: <strong>R$ {total.toFixed(2)}</strong></span>
                </div>
                <button
                    className={styles.finalizar}
                    onClick={() => dispacth(resetarCarrinho())}
                >
                    Finalizar Compra
                </button>
            </div>
        </div>
    )
}

export default Carrinho