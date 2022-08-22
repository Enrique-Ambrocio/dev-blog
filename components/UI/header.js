import Link from "next/link";
import DesktopNavBar from "./desktopnavbar";
import MobileNavBar from "./mobilenavbar";
import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link href="/">
                    <a>
                        HI
                    </a>
                </Link>
            </div>
            <nav className={styles.navigation}>
                <DesktopNavBar />
                <MobileNavBar />
            </nav>
        </header>
    )
}