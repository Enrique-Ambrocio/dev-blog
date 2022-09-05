import { FaReact } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'
import { SiFirebase } from 'react-icons/si'
import styles from './projects.module.css'

export default function Projects() {
    return (
        <section>
            <ul className={styles.project_hero_content_container}>
                <li>
                    <ul className={styles.project_hero_content_project}>
                        <li>
                            <div className={styles.project_hero_content_project_content}>
                                <h3>Bread Hunter</h3>
                                <p>Application that helps users keep track of all jobs they've applied to, in addition to being able to add calendar events.
                                    Developed using <span>React</span> \ <span>ReactRouter</span> \ <span>JavaScript</span> \ <span>CSS Modules</span> \ <span>RESTful API's</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <p>Technologies Used</p>
                            <FaReact />
                            <AiFillHtml5 />
                            <DiCss3 />
                            <DiJavascript1 />
                            <SiFirebase />
                        </li>
                        <li className={styles.project_hero_content_project_button}>
                            <a href='https://breadhunting-bf465.web.app' target="_blank" rel="noopener noreferrer">View Demo</a>
                            <a href='https://github.com/Enrique-Ambrocio/Bread-Hunter' target="_blank" rel="noopener noreferrer">View Code</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul className={styles.project_hero_content_project}>
                        <li>
                            <div className={styles.project_hero_content_project_content}>
                                <h3>Productivity App</h3>
                                <p>A to-do list application that renders a list based on input and filter. Apllication also has the capability to delete items.</p>
                            </div>
                        </li>
                        <li>
                            <p>Technologies Used</p>
                            <FaReact />
                            <AiFillHtml5 />
                            <DiCss3 />
                            <DiJavascript1 />
                        </li>
                        <li className={styles.project_hero_content_project_button}>
                            <a href='https://productivityapp-ee8f8.web.app/' target="_blank" rel="noopener noreferrer">View Demo</a>
                            <a href='https://github.com/Enrique-Ambrocio/ProductivityApp' target="_blank" rel="noopener noreferrer">View Code</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    )
}