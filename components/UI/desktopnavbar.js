import Link from "next/link";
import styles from './header.module.css'

export default function DesktopNavBar() {
    return (

        <div className={styles.desktop_nav}>
            <ul>
                <li>
                    <Link href="/blog"><a>Blog</a></Link>
                </li>
                <li>
                    <Link href="/projects"><a>Projects</a></Link>
                </li>
            </ul>
        </div>
    )
}