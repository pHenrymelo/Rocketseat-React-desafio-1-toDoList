import styles from './styles.module.css'
import logo from '../../assets/rocket.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={logo} className={styles.logotype}/>
            <div className={styles.logomark}>
                to<span>do</span>
            </div>
        </header>
    )
}