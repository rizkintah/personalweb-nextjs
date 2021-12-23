import Link from "next/link";
import { withRouter } from 'next/router';

function Navbar({router}) {

    const menuItem = [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Portfolio', href: '/portfolio' },
        { text: 'Contact', href: '/contact' },
    ];
    
    return (
        <nav className="navbar">
            <div className="container">
            <Link href="/"><a className="logo">ERH.</a></Link>
            
            <ul className="nav-links">
                {
                    menuItem.map((navItem, key) => (
                        <li key={key}>
                            <Link href={navItem.href}>
                                <a className={`nav-item ${router.pathname == navItem.href ? 'active' : ''}`} >{navItem.text}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);