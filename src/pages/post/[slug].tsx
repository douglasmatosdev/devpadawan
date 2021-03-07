import React from 'react'
import styled from 'styled-components'
import { getAllPosts } from '../../../scripts/blog/getAllPosts'
import Navbar from '../../components/Navbar';
import JSXParser from 'react-jsx-parser'

const Post = ({ post }): JSX.Element => {
    if (!post) return 
    const [{content}] = post
    console.log(content);
    

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

const PostContainer = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    header {
        width: 100%;
    }

`
