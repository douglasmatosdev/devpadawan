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
                <JediLogo width={250} height={250} />
                <h1>Dev Padawan</h1>
                <p>My studies about all</p>
            </main>
        </Container>
    )
}
