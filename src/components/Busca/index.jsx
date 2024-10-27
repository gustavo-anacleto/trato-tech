import { useDispatch, useSelector } from 'react-redux'
import styles from './Busca.module.scss'
import { mudarBusca, resetarBusca } from 'store/reducers/busca'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Busca() {
    const busca = useSelector(store => store.busca)
    const dispacth = useDispatch()
    const location = useLocation();

    useEffect(() => {
        dispacth(resetarBusca())
    }, [location.pathname, dispacth])

    return (
        <div className={styles.busca}>
            <input
                placeholder='O que você procura?'
                className={styles.input}
                value={busca}
                onChange={({ target }) => dispacth(mudarBusca(target.value))}
            />
        </div>
    )
}

export default Busca