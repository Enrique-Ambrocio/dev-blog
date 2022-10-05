import { gql } from "@apollo/client";
import moment from "moment";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/UI/layout";
import { client } from "../lib/apollo";


export default function Blog({ posts }) {

    return (
        <Layout>
            <Head>
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
                <title>Blog</title>
                <meta name="title" content="Welcome to the blog!" />
                <meta name="description" content="Featured articles" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2>Blog</h2>
            <ul>
                {posts.map(({ title, slug, date }) =>
                    <li key={slug}>
                        <span>- </span>
                        <Link href={`/blog/${slug}`}>
                            <a>{title}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await client.query({
        query: gql`
      query getWordpressPosts {
        posts {
          nodes {
            title
            content
            slug
            date
          }
        }
      }
      `
    });

    return {
        props: {
            posts: data.data.posts.nodes
        }
    }
}
