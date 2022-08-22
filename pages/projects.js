import Head from "next/head";
import Link from "next/link";
import Projects from "../components/Content/projects";
import Layout from "../components/UI/layout";


export default function projects() {
    return (
        <Layout>
            <Head>
                <title>
                    Projects
                </title>
            </Head>
            <h1 >Projects</h1>
            <Projects />
        </Layout>
    )
}