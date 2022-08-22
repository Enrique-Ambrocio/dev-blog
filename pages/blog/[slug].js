import { gql } from "@apollo/client"
import { resultKeyNameFromField } from "@apollo/client/utilities";
import Head from "next/head";
import Layout from "../../components/UI/layout";
import { client } from "../../lib/apollo"


export default function BlogPage({ post }) {
    return (
        <Layout>
            <article>
                <Head>
                    <title>{post.title}</title>
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