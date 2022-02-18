import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Sol Search - Search Magic Eden NFTs</title>
                <meta name="description" content="Monitor NFTs for on the Magic Eden marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
            </main>
        </div>
    )
}

export default Home
