import styles from './Header.module.scss'

function Header({ title, description, className = '', image }) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles['header-texto']}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      {image &&
        <div className={styles['header-imagem']}>
          <img
            alt={title}
            src={image}
          />
        </div>
      }
    </header>
  )
}

export default Header