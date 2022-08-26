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
                <meta charset="UTF-8" />
                <title>Blog</title>
                <meta name="title" content="Welcome to the blog!" />
                <meta name="description" content="Featured articles" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Blog</h1>
            <ul>
                {posts.map(({ title, slug, date }) =>
                    <li key={slug}>
                        {/* <p>{moment(date).format("MMM Do YYYY")}</p> */}
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
