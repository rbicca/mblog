
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import { getPosts } from '../lib/posts';

const HomePage = (props) => {

    console.log('HomePage render', props);

    return(
        <>
            <Head>
                <title>Mirkos Blog</title>
                <meta name="description" value="This is my blog"></meta>
            </Head>
            <main>
                <h1>Mirkos Blog</h1>
                <ul>
                    {props.slugs.map( p => ( 
                        <li key={p.slug}>
                            <Link href={`/posts/${p.slug}`}>
                                <a>{p.title}</a>
                            </Link>
                        </li>
                     ))}
                </ul>
            </main>
        </>
    );
};

export async function getStaticProps(props){
    const slugs = await getPosts();
    return{
        props: { slugs }
    };
}


export default HomePage;