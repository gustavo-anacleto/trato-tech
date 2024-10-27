import Header from 'components/Header'
import styles from './Home.module.scss'
import relogio from 'assets/inicial.png'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const categories = useSelector(state => state.categorias)

    return (
        <div>
            <Header
                title='Classificados Tech'
                description='Compre diversos tipos de produtos no melhor site do Brasil!'
                image={relogio}
                className={styles.header}
            />
            <div className={styles.categorias}>
                <div className={styles["categorias-title"]}>
                    <h1>Categorias</h1>
                </div>
                <div className={styles['categorias-container']}>
                    {
                        categories.map((categoria, index) =>(
                            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
                                <img src={categoria.thumbnail} alt={categoria.nome} />
                                <h1>{categoria.nome}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home