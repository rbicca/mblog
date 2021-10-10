import Head from 'next/head';
import { getPost, getSlugs } from '../../lib/posts';

const PostPage = ({ post}) =>{

    console.log('PostPage render:', post);

    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main>
                <p>{post.date}</p>
                <h1>{post.title}</h1>
                <article  dangerouslySetInnerHTML={{ __html: post.body }} />
            </main>
        </>
    );
};


export async function getStaticProps({  params: { slug }}){
    const post = await getPost(slug);

    return {
        props: { post }
    }
}

export async function getStaticPaths(){
  
    /*
   return {
       paths: [
           { params: { slug: 'first-post'} },
           { params: { slug: 'second-post'} },
       ],
       fallback: false
   } 
   */

   const slugs = await getSlugs();
   return {
    paths: slugs.map(s => ({
        params: { slug: s },
        })),
        fallback: false
   };


}

export default PostPage;
