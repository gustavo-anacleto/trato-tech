import styles from './Busca.module.scss'

function Busca() {
    return (
        <div className={styles.busca}>
            <input
                placeholder='O que você procura?'
                className={styles.input}
            />
        </div>
    )
}

export default Busca