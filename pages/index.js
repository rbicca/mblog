
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';

const HomePage = () => {

    console.log('HomePage render');

    return(
        <>
            <Head>
                <title>Mirkos Blog</title>
                <meta name="description" value="This is my blog"></meta>
            </Head>
            <main>
                <h1>Mirkos Blog</h1>
            </main>
        </>
    );
};

export default HomePage;