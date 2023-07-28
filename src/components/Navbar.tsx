import { useState, useEffect } from 'react';
import '../assets/styles/components/navbar.css';

export const Navbar = () => {

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        function onScroll() {
            let currentPosition = window.scrollY;
            setScroll(currentPosition <= 0 ? 0 : currentPosition);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scroll]);

    return (
        <div className={ scroll > 0 ? "navbar-container background-visible" : "navbar-container"}>
            <div className="navbar-title">
                <h3>We<span>b p</span>ortfolio</h3>
            </div>
            <div className="navbar-navigation">
                <a href="#projects">Projects</a>
                <a href="#about-me">About me</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}