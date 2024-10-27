import styles from './Item.module.scss'
import { AiOutlineHeart, AiFillHeart, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import { mudarFavorito } from 'store/reducers/itens'
import { useDispatch, useSelector } from 'react-redux'
import { mudarCarrinho, mudarQuantidade } from 'store/reducers/carrinho'
import classNames from 'classnames'

const iconProps = {
  size: 24,
  color: '#041833'
}
const quantityPros = {
  size: 32,
  color: '#1875E8'
}

function Item(props) {
  const {
    id,
    titulo,
    foto,
    preco,
    descricao,
    favorito,
    carrinho,
    quantidade
  } = props

  const dispatch = useDispatch();

  const isInCarshop = useSelector(store => store.carrinho.some(itemInCarshop => itemInCarshop.id === id))

  function handleFavorite() {
    dispatch(mudarFavorito(id));
  }

  function handleCarshop() {
    dispatch(mudarCarrinho(id));
  }

  function handleQuantityChange(quantityToSum) {
    dispatch(mudarQuantidade({ id, quantidade: quantityToSum }))
  }

  const cartAddContent = <FaCartPlus
    {...iconProps}
    color={isInCarshop ? '#1875E8' : iconProps.color}
    className={styles['item-acao']}
    onClick={handleCarshop}
  />

  const cartUpdateQuantityContent = <div className={styles.quantidade}>
    Quantidade: {<AiFillMinusCircle {...quantityPros} onClick={() => {
      if (quantidade >= 1) handleQuantityChange(-1)
    }} />}
    <span>{String(quantidade || 0).padStart(2, '0')}</span>
    <AiFillPlusCircle {...quantityPros} onClick={() => handleQuantityChange(1)} />
  </div>

  return (
    <div className={classNames(styles.item, {
      [styles.itemNoCarrinho]: carrinho,

    })}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            R$ {preco.toFixed(2)}
          </div>
          <div className={styles['item-acoes']}>
            {favorito
              ? <AiFillHeart {...iconProps} color='#ff0000' className={styles['item-acao']} onClick={handleFavorite} />
              : <AiOutlineHeart {...iconProps} className={styles['item-acao']} onClick={handleFavorite} />
            }
            {carrinho
              ? cartUpdateQuantityContent
              : cartAddContent
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item