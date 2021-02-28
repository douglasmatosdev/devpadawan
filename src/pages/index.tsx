import Link from 'next/link'

import JediLogo from '../assets/jedi.svg'
import { Container } from "../styles/pages/Home"
import Head from '../infra/components/Head'
import Typography from '../components/foundation/Typography'
import Header from '../patterns/Header'
import Footer from '../patterns/Footer'
import styled from 'styled-components'

const fontSize = 30

const Title = styled.h3`
    font-size: ${fontSize}px;
    a {
        color: orange;
        text-decoration: none;
        &:hover {
            color: #666;
        }
    }
`

const PostCardWrapper = styled.article`
    border: 1px solid orange;
    padding: 15px;
`
const PostCard: React.FC = () => {
    return (
        <PostCardWrapper>
            <header>
                <Title>
                    <a rel="bookmark" href="/the-wet-codebase">The WET Codebase</a>
                </Title>
                <small>July 13, 2020 coffe 1 min read</small>
            </header>
            <p>Come Waste your timewith me.</p>
        </PostCardWrapper>
    )
}


export default function Home() {
    return (
        <Container>
            <Head title="Dev Padawan" />
            <Header />
            <main>
                <PostCard />
                {/* <Typography>
                    Conteúdo do blog
                </Typography> */}
            </main>
            <Footer />
        </Container>
    )
}
