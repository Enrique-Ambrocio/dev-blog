import Head from "next/head";
import Link from "next/link";
import Projects from "../components/Content/projects";
import Layout from "../components/UI/layout";


export default function projects() {
    return (
        <Layout>
            <Head>
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <title>Projects</title>
                <meta name="title" content="Projects" />
                <meta name="description" content="My featured projects" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 >Projects</h1>
            <Projects />
        </Layout>
    )
}