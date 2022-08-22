import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/UI/layout'
import styles from '../styles/utils.module.css'
import { client } from '../lib/apollo'
import { gql } from '@apollo/client'

export default function Home({ posts }) {

  return (
    <Layout>
      <Head>
        <title>Home</title>
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
          Hi! My name is Enrique and I'm a previous SEO specialist now turned developer. I'm currently
          working with React and React Native.</p>
        <p>
          Please feel free to browse around the site where you can find <Link href="/projects"><a>projects I've
            been working on</a></Link> and my blog, where I share everthing I'm learning / problems I've come across (which I'm hoping might be helpful to others).
        </p>
        <p>
          Feel free to reach out to me through email or LinkedIn (as I'm most active there) for anything at all. <br></br><br></br>Cheers!
        </p>
      </section>
    </Layout>
  )
}
