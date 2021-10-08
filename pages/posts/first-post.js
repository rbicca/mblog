import Head from 'next/head';
import { getPost } from '../../lib/posts';

const FirstPostPage = ({ post}) =>{

    console.log('FirstPostPage render:', post);

    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </main>
        </>
    );
};


export async function getStaticProps(){

    const post = await getPost('first-post');

    return {
        props: { post }
    }
}


export default FirstPostPage;