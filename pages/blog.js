import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/UI/layout";
import { client } from "../lib/apollo";


export default function Blog({ posts }) {

    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <h1>Blog</h1>
            <ul>
                {posts.map(({ title, slug, date }) =>
                    <li key={slug}>
                        <Link href={`/blog/${slug}`}>
                            <a>{title}</a>
                        </Link>
                        <p>{date}</p>
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
