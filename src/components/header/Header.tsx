import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.buttonHome}>
        <div>Home</div>
      </div>
      <div className={styles.title}>
        <h1>El Padelero</h1>
      </div>
      <div className={styles.buttonMenu}>
        <p>Menú</p>
      </div>
    </div>
  )
}

export default Header