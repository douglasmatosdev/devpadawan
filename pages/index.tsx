import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../scripts/blog/getAllPosts'

import Head from '../src/infra/components/Head'
import Navbar from '../src/components/Navbar'

import { Container } from '../src/styles/pages/Home'

export default function Home({ posts }) {
    return (
        <Container>
            <Head title="DevPadawan" />
            <Navbar />
            <header className="headerContainer">
                <section>
                    <h2>
                        <span>I'am</span> <a href="https://www.linkedin.com/in/devdouglasmatos/">Douglas Silva</a>
                        <span>an Developer Padawan</span>

                    </h2>
                    <small>This blog contains some of knowledge</small>
                </section>
            </header>

            <section className="postsContainer">
                {posts.map((post, i) => {
                    return (
                        <article key={`${post?.metadata?.title}-${i}`} className="postsContainer__post">
                            <h2>
                                <Link href={`/post/${encodeURIComponent(post?.metadata?.slug)}`}>
                                    {post?.metadata?.title}
                                </Link>
                            </h2>
                            <small>Posted in - {post?.metadata?.date}</small>
                            <p>
                                {post?.metadata?.excerpt}
                            </p>
                        </article>
                    )
                })}
            </section>
        </Container>
    )
}


export async function getStaticProps() {
    const posts = getAllPosts()

    return {
        props: {
            posts
        }
    }
}