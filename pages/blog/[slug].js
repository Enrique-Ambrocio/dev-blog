import { gql } from "@apollo/client"
import Head from "next/head";
import Layout from "../../components/UI/layout";
import { client } from "../../lib/apollo"


export default function BlogPage({ post }) {
    return (
        <Layout>
            <article>
                <Head>
                    <meta name="robots" content="index, follow" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta charset="UTF-8" />
                    <title>{post.title}</title>
                    <meta name="description" content={`${post.title}`} />
                    <meta name="title" content={` Blog - ${post.title}`} />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
        </Layout>
    )
}


export async function getStaticPaths() {
    const result = await client.query({
        query: gql`
        query getWordpressPosts {
          posts {
            nodes {
              slug
            }
          }
        }
        `
    });

    return {
        paths: result.data.posts.nodes.map(({ slug }) => {
            return {
                params: { slug },
            }
        }),

        fallback: false,
    }
}


export async function getStaticProps({ params }) {
    const { slug } = params
    const result = await client.query(
        {
            query: gql`
            query WordPressPostBySlug ($slug: String!) {
                postBy(slug: $slug) {
                  title
                  content
                }
              }
            `,
            variables: { slug }
        }
    );

    return {
        props: {
            post: result.data.postBy
        }
    }
}