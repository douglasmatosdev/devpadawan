import React from 'react'
import styled from 'styled-components'
import { getAllPosts } from '../../scripts/blog/getAllPosts'
import Navbar from '../../src/components/Navbar';
import JSXParser from 'react-jsx-parser'

export default function Post({ post }): JSX.Element {
    if (!post) return 
    const [{content}] = post

    return (
        <PostContainer>
            <header>
                <Navbar />
            </header>

            <article>
                <JSXParser
                jsx={content}
                />
            </article>
        </PostContainer>
    )
}

export const getStaticProps = async (context) => {
    const pageSlug = context.params.slug
    const posts = getAllPosts()
    const post = await posts.filter((e, i) => e.metadata.slug == pageSlug)

    return {
        props: {
            post
        }
    }
}

const PostContainer = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    header {
        width: 100%;
    }

`


export const getStaticPaths = async () => {
    const posts = getAllPosts()
    const paths = posts.map(((e, i) => ({ params: { slug: `${e.metadata.slug}` } })))
    
    return {
        paths: paths,
        fallback: false
    }
}

