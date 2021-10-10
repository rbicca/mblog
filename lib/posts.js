import { readFile, readdir } from 'fs/promises';
import marked from 'marked';
import matter from 'gray-matter';

export  async function getPost(slug){
    
    //const data = await readFile(`content/posts/${slug}.json`, 'utf-8');
    //return JSON.parse(data);

    const source = await readFile(`content/posts/${slug}.md`, 'utf-8');
    const html = marked(source);
    const { data, content } = matter(source);

    return{
        date: data.date,
        title: data.title,
        body: html
    }
    
}

export async function getSlugs(){
    const files = await readdir('content/posts');
    return files
                .filter( f => f.endsWith('.md'))
                .map( f => f.slice(0,-3));
}

export async function getPosts(){
    const slugs = await getSlugs();
    const posts = [];
    for(const slug of slugs){
        const post = await getPost(slug);
        posts.push({slug, ...post });
    }
    return posts;
}