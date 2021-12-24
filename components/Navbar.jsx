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
        <nav className="mt-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <a className="text-5xl font-semibold">ERH.</a>
                    </Link>
                    
                    <ul className="flex items-center">
                        {
                            menuItem.map((navItem, key) => (
                                <li key={key}>
                                    <Link href={navItem.href}>
                                        <a className={`item-links ${router.pathname == navItem.href ? 'active' : ''}`} >{navItem.text}</a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);