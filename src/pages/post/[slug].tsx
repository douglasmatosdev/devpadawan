import React from 'react'
import styled from 'styled-components'
import { getAllPosts } from '../../../scripts/blog/getAllPosts'
import Navbar from '../../components/Navbar';

const Post: React.FC = ({ post }) => {
    if (!post) return null
    console.log(post[0].content);

    return (
        <section>
            <header>
                <Navbar />
            </header>

            <article>
                {post[0].content}
            </article>
        </section>
    )
}

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug
    const posts = getAllPosts()

    const post = await posts.filter((e, i) => e.metadata.slug == pageSlug)

    return {
        props: {
            post
        }
    }
}
export default Post
