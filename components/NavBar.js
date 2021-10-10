import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
            <ThemeSwitch />
            <style jsx>{`

                nav{
                    display: flex;
                    justify-content: space-between;
                }

                ul{
                    
                }
            `}</style>
        </nav>
    );
};

export default NavBar;