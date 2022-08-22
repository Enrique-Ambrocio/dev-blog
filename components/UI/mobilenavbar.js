import Link from "next/link";
import { Fragment, useState } from "react";
import { BiMenu } from 'react-icons/bi'
import { MdCancel } from 'react-icons/md'
import styles from './header.module.css'

export default function MobileNavBar() {

    const [displayMenuItems, setDisplayMenuItems] = useState(false)

    function cancelHandler() {
        setDisplayMenuItems(false)
    }

    function onClickHandler() {
        setDisplayMenuItems(true)
    }

    let content;

    if (!displayMenuItems) {
        content = <BiMenu onClick={onClickHandler} />
    }


    if (displayMenuItems) {
        content = <Fragment>
            <MdCancel onClick={cancelHandler} />
            <ul>
                <li>
                    <Link href="/blog"><a>Blog</a></Link>
                </li>
                <li>
                    <Link href="/projects"><a>Projects</a></Link>
                </li>
            </ul>
        </Fragment>
    }

    return (
        <div className={styles.mobile_nav}>
            {content}
        </div>
    )
}