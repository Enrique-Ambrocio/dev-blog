import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/UI/layout'
import styles from '../styles/utils.module.css'

export default function Home({ posts }) {

  return (
    <Layout>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>Home</title>
        <meta name="title" content="Enrique Ambrocio | Twitter @EnriqueAmbroci0 " />
        <meta name="description" content="Hello and welcome to the site! In here, I share the projects I'm currently working and some of things I've learned along the way of my developer journey." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Image
          src="/images/profile.jpg"
          className={styles.borderCircle}
          height={125}
          width={125}
          alt="Enrique Ambrocio"
        />
        <p>
          Hey! My name is Enrique and I'm a previous SEO specialist currently
          working with the MERN stack and Next.js.</p>
        <p>
          Please feel free to browse around the site where you can find <Link href="/projects"><a>projects I've
            been working on</a></Link> and <Link href="/blog"><a>my blog</a></Link>, where I share everthing I'm learning / problems I've come across (which I'm hoping might be helpful to others).
        </p>
        <p>
          Feel free to reach out to me through email or LinkedIn (as I'm most active there) for anything at all. <br></br><br></br>Thanks!
        </p>
      </section>
    </Layout>
  )
}
