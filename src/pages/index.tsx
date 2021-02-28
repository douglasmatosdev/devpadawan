import Head from "next/head"

import JediLogo from '../assets/jedi.svg'
import { Container } from "../styles/pages/Home"

export default function Home() {
    return (
        <Container>
            <Head>
                <title>Home page</title>
            </Head>
            <main>
                <JediLogo />
                <h1>Dev Padawan</h1>
                <p>My studies about all</p>
            </main>
        </Container>
    )
}
