import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './footer.module.css'

export default function Footer() {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <p>&copy; Copyright {year} Enrique Ambrocio.</p>
            </div>
            <ul className={styles.socials}>
                <li><a href='https://twitter.com/EnriqueAmbroci0'><FaTwitter /></a></li>
                <li><a href='https://www.linkedin.com/in/enrique-ambrocio-09aa73191/'><FaLinkedin /></a></li>
                <li><a href='https://github.com/Enrique-Ambrocio'><FaGithub /></a></li>
            </ul>
        </footer>
    )
}