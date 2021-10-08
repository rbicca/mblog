import NavBar from '../components/NavBar';
import '../styles/globals.css';
import Head from 'next/head';

const App = ({Component, pageProps}) =>{
    console.log('App render');
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps}/>
        </>
    );
};

export default App;