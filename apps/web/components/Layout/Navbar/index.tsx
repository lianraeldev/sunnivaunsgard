import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const router = useRouter();
    const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    useEffect(() => {
        const elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId && elementId.classList.add("is-sticky");
            } else {
                elementId && elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }, []);

    const toggleNavbar = () =>
        setCollapsed(
            !collapsed,
        );

    const isActive = (path: string) => router.pathname === path ? 'active' : ''
    const onNavigate = () => setCollapsed(true);

    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <Image width={200} height={100} src="/images/logo.png" alt="logo" />
                    </Link>

                    <button
                        type="button"
                        className={classTwo}
                        aria-expanded="false"
                        onClick={toggleNavbar}
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={classOne} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link
                                    href="/"
                                    onClick={onNavigate}
                                    className={`nav-link ${isActive("/")}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/about"
                                    onClick={onNavigate}
                                    className={`nav-link ${isActive("/about")}`}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    href="/events"
                                    onClick={onNavigate}
                                    className={`nav-link ${isActive("/events")}`}
                                >
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;