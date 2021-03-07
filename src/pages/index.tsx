import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../../scripts/blog/getAllPosts'

import Head from '../infra/components/Head'
import Navbar from '../components/Navbar'

export default function Home({ posts }) {
    const [{metadata}] = posts
    const { title, date, excerpt, slug } = metadata

    return (
        <div>
            <Head title="DevPadawan" />
            <Navbar />
            <header className="headerContainer">
                <img src="https://github.com/douglasmatosdev.png" />
                <section>
                    <h1>DevPadawan</h1>
                    <small>I am studing sharing content</small>
                </section>
            </header>

            <section className="postsContainer">
                <h1>Posts</h1>
                {posts.map((post, i) => {
                    return (
                        <article key={`${title}-${i}`} className="postsContainer__post">
                            <h2>
                                <Link href={`/post/${slug}`}>
                                    {title}
                                </Link>
                            </h2>
                            <p>
                                {excerpt}
                            </p>
                        </article>
                    )
                })}
            </section>
        </div>
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