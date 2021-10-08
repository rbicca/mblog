
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
                <ul>
                    <li>
                        <Link href="/posts/first-post">
                            <a>First Post</a>
                        </Link>
                    </li>
                </ul>
            </main>
        </>
    );
};

export default HomePage;